import BookingTracking from "../views/tracking-mgt/booking-tracking";
import BookingInsight from "../views/tracking-mgt/booking-insight";
import HotelIntroduceSignup from "../views/tracking-mgt/hotel-introduce-signup"
import HotelStatusTracking from "../views/tracking-mgt/hotel-status-tracking"
const routes = [
    {
        path: '/hotel-management/booking-tracking',
        name: 'booking-tracking',
        component: BookingTracking,
        meta: {
            title: 'Booking Tracking',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/booking-insight',
        name: 'booking-insight',
        component: BookingInsight,
        meta: {
            title: 'Booking insight',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/hotel-introduce-signup',
        name: 'hotel-introduce-signup',
        component: HotelIntroduceSignup,
        meta: {
            title: 'Hotel Introduce Signup',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/hotel-status-tracking',
        name: 'hotel-status-tracking',
        component: HotelStatusTracking,
        meta: {
            title: 'Hotel Status Tracking',
            requiresAuth: true
        }
    }
];

export default routes;
        