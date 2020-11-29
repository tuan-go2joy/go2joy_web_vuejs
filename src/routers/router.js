import Vue from "vue";
import VueRouter from "vue-router";

import AppConfig from "../config.js";

import SignIn from "../views/SignIn";
import NotFoundPage from "../views/NotFoundPage";
import MaintenancePage from "../views/MaintenancePage";
import ComingSoonPage from "../views/ComingSoonPage";

import dashboardRouter from "./dashboard";
import userRouter from "./user";
import hotelsRouter from "./hotels";
import accountRouter from "./account";
import marketingRouter from "./marketing";
import settingRouter from "./setting";
import bookingRouter from "./booking";
import serviceRouter from "./service";
import mileageRouter from "./mileage";
import trackingRouter from "./tracking"

const routes = [
    {
        path: "*",
        name: "page-not-found",
        component: NotFoundPage,
        meta: {
            title: "Page not found",
            template: "blank"
        }
    },
    {
        path: "/hotel-management/coming-soon",
        name: "coming-soon",
        component: ComingSoonPage,
        meta: {
            title: "Coming soon",
            template: "blank"
        }
    },
    {
        path: "/hotel-management/maintenance",
        name: "maintenance",
        component: MaintenancePage,
        meta: {
            title: "Maintenance"
        }
    },
    {
        path: "/hotel-management/sign-in",
        name: "sign-in",
        component: SignIn,
        meta: {
            title: "Sign in",
            template: "blank"
        }
    },
    {
        path: "/hotel-management/logout",
        name: "logout",
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/hotel-management/",
        redirect: "/hotel-management/dashboard",
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/hotel-management/download-files/",
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/",
        redirect: "/hotel-management/dashboard",
        meta: {
            requiresAuth: true
        }
    },

    ...dashboardRouter,
    ...userRouter,
    ...hotelsRouter,
    ...accountRouter,
    ...marketingRouter,
    ...settingRouter,
    ...bookingRouter,
    ...serviceRouter,
    ...mileageRouter,
    ...trackingRouter
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title =
        toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Go2Joy";

    if (toRoute.matched.some(record => record.meta.requiresAuth)) {
        let accessToken = localStorage.access_token;
        if (typeof accessToken === "undefined") {
            next({
                path: "/hotel-management/sign-in",
                query: {
                    redirect: toRoute.fullPath
                }
            });
        }

        if (toRoute.name === "logout") {
            localStorage.removeItem("access_token");
            localStorage.removeItem("profile");
            next({
                path: "/hotel-management/sign-in",
                query: {
                    redirect: toRoute.fullPath
                }
            });
        } else {
            // Store profile info to localstorage
            let profile = localStorage.profile;
            if (
                typeof profile === "undefined" ||
                (typeof profile === "string" && profile === "")
            ) {
                let url = AppConfig.api.url + AppConfig.api.endpoint.profile;
                const itemStr = localStorage.getItem("access_token");
                if (typeof itemStr !== "undefined" && itemStr !== null) {
                    const item = JSON.parse(itemStr);
                    let accessToken = item.value;
                    axios.defaults.headers = {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + accessToken
                    };
                    axios
                        .get(url)
                        .then(function(response) {
                            let value = {
                                fullName: response.data.data.fullName,
                                email: response.data.data.email,
                                userId: response.data.data.userId
                            };
                            const itemStr = localStorage.getItem(
                                "access_token"
                            );
                            if (
                                typeof itemStr !== "undefined" &&
                                itemStr !== null
                            ) {
                                const item = JSON.parse(itemStr);
                                let expiry = item.expiry;
                                let profile = {
                                    value: value,
                                    expiry: expiry
                                };
                                localStorage.setItem(
                                    "profile",
                                    JSON.stringify(profile)
                                );
                            }
                        })
                        .catch(error => {
                            localStorage.removeItem("access_token");
                            localStorage.removeItem("profile");
                            next({
                                path: "/hotel-management/sign-in",
                                query: {
                                    redirect: toRoute.fullPath
                                }
                            });
                        });
                }
            }
        }
    }

    if (toRoute.name === "sign-in") {
        // Check already login or not by access token
        let url = AppConfig.api.url + AppConfig.api.endpoint.profile;
        const itemStr = localStorage.getItem("access_token");
        if (typeof itemStr !== "undefined" && itemStr !== null) {
            const item = JSON.parse(itemStr);
            let accessToken = item.value;
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken
            };
            axios
                .get(url)
                .then(function(response) {
                    // Redirect to dashboard
                    window.location.href = "dashboard";
                })
                .catch(error => {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("profile");
                    next({
                        path: "/hotel-management/sign-in",
                        query: {
                            redirect: toRoute.fullPath
                        }
                    });
                });
        }
    }

    next();
});

export default router;
