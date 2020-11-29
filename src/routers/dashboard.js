import Dashboard from "../views/dashboard";
import DetailDashboard from "../views/dashboard/_id";
import EditDashboard from "../views/dashboard/edit";



const routes = [
    {
        path: '/hotel-management/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            title: 'Dashboard',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/dashboard-detail',
        name: 'dashboard-detail',
        component: DetailDashboard,
        meta: {
            title: 'Dashboard',
            requiresAuth: true
        }
       
    },
    {
        path: '/hotel-management/dashboard-edit',
        name: 'dashboard-edit',
        component: EditDashboard,
        meta: {
            title: 'Dashboard',
            requiresAuth: true
        }
       
    }
];

export default routes;
