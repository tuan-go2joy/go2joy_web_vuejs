import BookingReport from "../views/booking/booking-report";
import CashFlowReport from "../views/booking/cash-flow-report";
import HotelDebtMgt from "../views/booking/hotel-debt-mgt"


const routes = [
    {
        path: '/hotel-management/booking-report',
        name: 'booking-report',
        component: BookingReport,
        meta: {
            title: 'Booking Report Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/cash-flow-report',
        name: 'cash-flow-report',
        component: CashFlowReport,
        meta: {
            title: 'Cash Flow Report Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/hotel-debt-mgt',
        name: 'hotel-debt-mgt',
        component: HotelDebtMgt,
        meta: {
            title: 'Hotel Debt Management',
            requiresAuth: true
        }
    }
   
];

export default routes;
