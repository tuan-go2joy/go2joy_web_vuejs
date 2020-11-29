import Banner from "../views/marketing/banner";
import DetailBanner from "../views/marketing/banner/detail-banner";

import Popup from "../views/marketing/popup";
import CreatePopup from "../views/marketing/popup/create-popup"
import EditPopup from "../views/marketing/popup/_id"

const routes = [
    {
        path: '/hotel-management/banner',
        name: 'banner',
        component: Banner,
        meta: {
            title: 'Banner',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/detail-banner',
        name: 'detail-banner',
        component: DetailBanner,
        meta: {
            title: 'DetailBanner',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/popup',
        name: 'popup',
        component: Popup,
        meta: {
            title: 'Popup',
            requiresAuth: true
        }
    },
    //create popup
    {
        path: '/hotel-management/create-popup',
        name: 'create-popup',
        component: CreatePopup,
        meta: {
            title: 'Create  Popup',
            requiresAuth: true
        }
    },
    //Edit popup
    {
        path: '/hotel-management/edit-popup',
        name: 'edit-popup',
        component: EditPopup,
        meta: {
            title: 'Edit  Popup',
            requiresAuth: true
        }
    },
];

export default routes;
        