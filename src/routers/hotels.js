import ProductTypeMgt from "../views/hotels/product-type-mgt";
import CreateGroupTypeHotelMgt from "../views/hotels/product-type-mgt/create-product-type";
import EditHotelGroupTypeMgt from "../views/hotels/product-type-mgt/_id";
import ProductMgt from "../views/hotels/product-mgt";
import HotelGroupMgt from "../views/hotels/hotel-group-mgt";
import DetailHotelGroupMgt from "../views/hotels/hotel-group-mgt/_id"
import CreateGroupHotelMgt from "../views/hotels/hotel-group-mgt/create-hotel-group";
import HotelDisplayMgt from "../views/hotels/hotel-display-mgt";
import CreateDisplayHotelMgt from "../views/hotels/hotel-display-mgt/create-hotel-display"
import EditHotelDisplayMgt from "../views/hotels/hotel-display-mgt/_id"
import RoomTypeMgt from "../views/hotels/room-type-mgt";
import HotelStaffMgt from "../views/hotels/hotel-staff-mgt";
import FacilityMgt from "../views/hotels/facility-mgt";
import CreateFacilitiesHotelMgt from "../views/hotels/facility-mgt/create-hotel-facilities"
import EditHotelFacilityMgt from "../views/hotels/facility-mgt/_id"
import DetailHotelFacilityMgt  from "../views/hotels/facility-mgt/detail-facility"
import NoticeToHotel from "../views/hotels/notice-to-hotel";
import StampMgt from "../views/hotels/stamp-mgt";
import ReviewMgt from "../views/hotels/review-mgt";
import ViewReviewHotelMgt from "../views/hotels/review-mgt/view-review-mgt"

const routes = [
    {
        path: "/hotel-management/product-type-mgt",
        name: "product-type-mgt",
        component: ProductTypeMgt,
        meta: {
            title: "Product Type Management",
            requiresAuth: true
        }
    },
     // Create hotel group type mgt
    {
        path: "/hotel-management/hotel-group-type-mgt-create",
        name: "hotel-group-mgt-type-create",
        component: CreateGroupTypeHotelMgt,
        meta: {
            title: "Create Hotel Group Type Management",
            requiresAuth: true
        }
    },
    // Edit hotel group type mgt
    {
        path: "/hotel-management/hotels-group-type-mgt-edit",
        name: "hotels-group-type-mgt-edit",
        component: EditHotelGroupTypeMgt,
        meta: {
            title: "Edit Hotel Group Type Management",
            requiresAuth: true
        },
        props: true
    },
    {
        path: "/hotel-management/product-mgt",
        name: "product-mgt",
        component: ProductMgt,
        meta: {
            title: "Product Management",
            requiresAuth: true
        }
    },

    // hotel group mgt
    {
        path: "/hotel-management/hotel-group-mgt",
        name: "hotel-group-mgt",
        component: HotelGroupMgt,
        meta: {
            title: "Hotel Group Management",
            requiresAuth: true
        }
    },
     // Create hotel group mgt
    {
        path: "/hotel-management/hotel-group-mgt-create",
        name: "hotel-group-mgt-create",
        component: CreateGroupHotelMgt,
        meta: {
            title: "Create Hotel Group Management",
            requiresAuth: true
        }
    },
    // Edit hotel group mgt
    {
        path: "/hotel-management/hotels-detail",
        name: "hotels-detail",
        component: DetailHotelGroupMgt,
        meta: {
            title: "Detail Hotel Management",
            requiresAuth: true
        },
        props: true
    },

    {
        path: "/hotel-management/hotel-display-mgt",
        name: "hotel-display-mgt",
        component: HotelDisplayMgt,
        meta: {
            title: "Hotel Display Management",
            requiresAuth: true
        }
    },
     // Create hotel display mgt
    {
        path: "/hotel-management/create-hotel-display",
        name: "create-hotel-display",
        component: CreateDisplayHotelMgt,
        meta: {
            title: "Create Hotel Display Management",
            requiresAuth: true
        }
    },
    // Edit hotel display mgt
    {
        path: "/hotel-management/edit-hotel-display-mgt",
        name: "edit-hotel-display-mgt",
        component: EditHotelDisplayMgt,
        meta: {
            title: "Edit Hotel Display Management",
            requiresAuth: true
        },
        props: true
    },
    
    {
        path: "/hotel-management/room-type-mgt",
        name: "room-type-mgt",
        component: RoomTypeMgt,
        meta: {
            title: "Room Type Management",
            requiresAuth: true
        }
    },
    {
        path: "/hotel-management/hotel-staff-mgt",
        name: "hotel-staff-mgt",
        component: HotelStaffMgt,
        meta: {
            title: "Room Type Management",
            requiresAuth: true
        }
    },

    // facility
    {
        path: "/hotel-management/facility-mgt",
        name: "facility-mgt",
        component: FacilityMgt,
        meta: {
            title: "Facility Management",
            requiresAuth: true
        }
    },
    // Create facility
    {
        path: "/hotel-management/hotel-facility-mgt-create",
        name: "hotel-facility-mgt-create",
        component: CreateFacilitiesHotelMgt,
        meta: {
            title: "Create Hote Facility Management",
            requiresAuth: true
        }
    },
    // Edit facility
    {
        path: "/hotel-management/hotels-facility",
        name: "hotels-facility",
        component: EditHotelFacilityMgt,
        meta: {
            title: "Edit Facility Hotel Management",
            requiresAuth: true
        },
        props: true
    },
    // detail facility
    {
        path: "/hotel-management/detail-facility",
        name: "detail-facility",
        component: DetailHotelFacilityMgt,
        meta: {
            title: "Detail Facility Hotel Management",
            requiresAuth: true
        },
        props: true
    },

    {
        path: "/hotel-management/product-type-mgt",
        name: "product-type-mgt",
        component: ProductTypeMgt,
        meta: {
            title: "Product Type Management",
            requiresAuth: true
        }
    },
    {
        path: "/hotel-management/notice-to-hotel",
        name: "notice-to-hotel",
        component: NoticeToHotel,
        meta: {
            title: "Notice To Hotel",
            requiresAuth: true
        }
    },
    {
        path: "/hotel-management/stamp-mgt",
        name: "stamp-mgt",
        component: StampMgt,
        meta: {
            title: "Stamp Management",
            requiresAuth: true
        }
    },
    {
        path: "/hotel-management/review-mgt",
        name: "review-mgt",
        component: ReviewMgt,
        meta: {
            title: "Review Management",
            requiresAuth: true
        }
    },
    // View Review Hotel mgt
    {
        path: "/hotel-management/view-review-mgt",
        name: "view-review-mgt",
        component: ViewReviewHotelMgt,
        meta: {
            title: "View Review Hotel Management",
            requiresAuth: true
        },
        props: true
    }
];

export default routes;
