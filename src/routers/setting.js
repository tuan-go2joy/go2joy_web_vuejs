import GeneralSetting from "../views/setting/general-setting";

const routes = [
    {
        path: '/hotel-management/general-setting',
        name: 'general-setting',
        component: GeneralSetting,
        meta: {
            title: 'General setting',
            requiresAuth: true
        }
    },
];

export default routes;
        