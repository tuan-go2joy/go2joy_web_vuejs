import ServiceAgreementMgt from "../views/service-agreement-mgt";
import UpdateServiceAgreementMgt from "../views/service-agreement-mgt/update-service-agreement"


const routes = [
    {
        path: '/hotel-management/service-agreement-mgt',
        name: 'service-agreement-mgt',
        component: ServiceAgreementMgt,
        meta: {
            title: 'Service Agreement Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/update-service-agreement-mgt',
        name: 'update-service-agreement-mgt',
        component: UpdateServiceAgreementMgt,
        meta: {
            title: 'Update Service Agreement Management',
            requiresAuth: true
        }
    }
];

export default routes;
