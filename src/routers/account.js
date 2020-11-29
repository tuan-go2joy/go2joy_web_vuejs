import AccountSaleIncentiveHistory from "../views/accounts/account-sale-incentive-management";
import AccountSaleIncentive from "../views/accounts/account-sale-incentive-management/account-sale-incentive";
import DetailOfStaff from "../views/accounts/account-sale-incentive-management/account-sale-incentive/detail-of-staff";
import DetailAccountSaleIncentive from "../views/accounts/account-sale-incentive-management/account-sale-incentive/account-sale-incentive-detail";

import StaffManagement from "../views/accounts/staff-management";
import DetailStaffManagement from "../views/accounts/staff-management/detail-staffs";
import CreateStaffManagement from "../views/accounts/staff-management/create-staffs";
import ConfirmGroupMgt from "../views/accounts/confirm-group-mgt"

const routes = [
    {
        path: '/hotel-management/account-sale-incentive-management',
        name: 'account-sale-incentive-management',
        component: AccountSaleIncentiveHistory,
        meta: {
            title: 'Account Sale Incentive History Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/account-sale-incentive',
        name: 'account-sale-incentive',
        component: AccountSaleIncentive,
        meta: {
            title: 'Account Sale Incentive Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/detail-of-staff',
        name: 'detail-of-staff',
        component: DetailOfStaff,
        meta: {
            title: 'Detail Of Staff',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/account-sale-incentive-detail',
        name: 'account-sale-incentive-detail',
        component: DetailAccountSaleIncentive,
        meta: {
            title: 'Detail Account Sale Incentive',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/staff-management',
        name: 'staff-management',
        component: StaffManagement,
        meta: {
            title: 'Staff Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/staff-detail',
        name: 'staff-detail',
        component: DetailStaffManagement,
        meta: {
            title: 'Staff Management',
            requiresAuth: true
        }
    },
    {
        path: '/hotel-management/create-detail',
        name: 'create-detail',
        component: CreateStaffManagement,
        meta: {
            title: 'Create Management',
            requiresAuth: true
        }
    },
    // index ConfirmGroupMgt
    {
        path: '/hotel-management/confirm-group-mgt',
        name: 'confirm-group-mgt',
        component: ConfirmGroupMgt,
        meta: {
            title: 'Confirm Group Management',
            requiresAuth: true
        }
    },
    
];

export default routes;
