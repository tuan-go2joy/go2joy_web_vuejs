import DeviceManagement from "../views/users/devices-management";

import UserManagement from "../views/users/users-management";
import EditUserManagement from "../views/users/users-management/_id";
import DetailUserManagement from "../views/users/users-management/detail-user";


import CounselingManagement from "../views/users/counselings-management";
import DetailCounselingManagement from "../views/users/counselings-management/_id";
import CreateCounselingManagement from "../views/users/counselings-management/create-counselings";


const routes = [
    {
        path: '/hotel-management/devices',
        name: 'devices',
        component: DeviceManagement,
        meta: {
            title: 'Device Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/users',
        name: 'users',
        component: UserManagement,
        meta: {
            title: 'User Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/users-detail',
        name: 'users-detail',
        component: DetailUserManagement,
        meta: {
            title: 'Detail User Management',
            requiresAuth: true
        },
        props: true,
    },
    {
        path: '/hotel-management/users-edit',
        name: 'users-edit',
        component: EditUserManagement,
        meta: {
            title: 'Detail User Management',
            requiresAuth: true
        },
        props: true,
    },
    {
        path: '/hotel-management/counselings-detail',
        name: 'counselings-detail',
        component: DetailCounselingManagement,
        meta: {
            title: 'Detail User Management',
            requiresAuth: true
        },
        props: true,
    },
    {
        path: '/hotel-management/counselings',
        name: 'counselings',
        component: CounselingManagement,
        meta: {
            title: 'Counseling Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/counselings-create',
        name: 'counselings-create',
        component: CreateCounselingManagement,
        meta: {
            title: 'Counseling Management',
            requiresAuth: true
        }
    }
];

export default routes;
