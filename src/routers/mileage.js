import MPBoostingMgt from "../views/mileage-point-mgt/mp-boosting-mgt";
import MPUserMgt from "../views/mileage-point-mgt/mp-user-mgt"
const routes = [
    {
        path: '/hotel-management/mp-boosting-mgt',
        name: 'mp-boosting-mgt',
        component: MPBoostingMgt,
        meta: {
            title: 'Mileage Point Boosting Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/mp-user-mgt',
        name: 'mp-user-mgt',
        component: MPUserMgt,
        meta: {
            title: 'Mileage Point User Management',
            requiresAuth: true
        }
    }
];

export default routes;
        