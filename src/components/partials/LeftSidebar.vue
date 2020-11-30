<template>
<!-- Start Sidebar -->
<div class="sidebar">
    <!-- Start Logobar -->
    <div class="logobar">
        <a href="dashboard" class="logo logo-large"><img src="../../assets/images/template/images/logo.png" class="img-fluid" alt="logo"></a>
        <a href="dashboard" class="logo logo-small"><img src="../../assets/images/template/images/logo-small.png" class="img-fluid" alt="logo"></a>
    </div>
    <!-- End Logobar -->
    <!-- Start Navigationbar -->
    <div class="navigationbar">
        <ul class="vertical-menu">
            <li>
                <a href="dashboard">
                    <img src="../../assets/images/template/svg-icon/dashboard.svg" class="img-fluid" alt="dashboard"><span>{{$t('breadcrumb.home')}}</span>
                </a>
            </li>
            <li>
                <a href="javaScript:void(0);">
                    <img src="../../assets/images/template/svg-icon/user.svg" class="img-fluid" alt="user"><span>{{$t('breadcrumb.u_lf_side.name')}}</span><i class="feather icon-chevron-right pull-right"></i>
                </a>
                <ul class="vertical-submenu">
                    <li><a href="devices">{{$t('breadcrumb.u_lf_side.device')}}</a></li>
                    <li><a href="users">{{$t('breadcrumb.u_lf_side.user')}}</a></li>
                    <li><a href="counselings">{{$t('breadcrumb.u_lf_side.counseling')}}</a></li>
                </ul>
            </li>
            <li>
                <a href="javaScript:void(0);">
                    <img src="../../assets/images/template/svg-icon/advanced.svg" class="img-fluid" alt="advanced"><span>{{$t('breadcrumb.hotels')}}</span><i class="feather icon-chevron-right pull-right"></i>
                </a>
                <ul class="vertical-submenu">
                    <li><a href="product-type-mgt">{{$t('breadcrumb.product-type-mgt')}}</a></li>
                    <li><a href="product-mgt">{{$t('breadcrumb.product-mgt')}}</a></li>
                    <li><a href="hotel-group-mgt">{{$t('breadcrumb.hotel-group-mgt')}}</a></li>
                    <li><a href="hotel-display-mgt">{{$t('breadcrumb.hotel-display-mgt')}}</a></li>
                    <li><a href="room-type-mgt">{{$t('breadcrumb.room-type-mgt')}}</a></li>
                    <li><a href="hotel-staff-mgt">{{$t('breadcrumb.hotel-staff-mgt')}}</a></li>
                    <li><a href="facility-mgt">{{$t('breadcrumb.facility-mgt')}}</a></li>
                    <li><a href="notice-to-hotel">{{$t('breadcrumb.notice-to-hotel')}}</a></li>
                    <li><a href="stamp-mgt">{{$t('breadcrumb.stamp-mgt')}}</a></li>
                    <li><a href="review-mgt">{{$t('breadcrumb.review-mgt')}}</a></li>
                </ul>
            </li>
            <li>
                <a href="javaScript:void(0);">
                    <img src="../../assets/images/template/svg-icon/basic.svg" class="img-fluid" alt="advanced"><span>{{$t('breadcrumb.booking.name')}}</span><i class="feather icon-chevron-right pull-right"></i>
                </a>
                <ul class="vertical-submenu">
                    <li><a href="booking-report">{{$t('breadcrumb.booking.booking_report')}}</a></li>
                    <li><a href="cash-flow-report">{{$t('breadcrumb.booking.cash_flow_report')}}</a></li>
                    <li><a href="hotel-debt-mgt">{{$t('breadcrumb.booking.hotel_debt_mgt')}}</a></li>
                    <li><a href="sending-mail-mgt">{{$t('breadcrumb.booking.sending_mail_mgt')}}</a></li>
                </ul>
            </li>
            <li>
                <a href="javaScript:void(0);">
                    <i class="fa fa-line-chart"></i><span>{{$t('breadcrumb.tracking-mgt.name')}}</span><i class="feather icon-chevron-right pull-right"></i>
                </a>
                <ul class="vertical-submenu">
                    <li><a href="booking-tracking">{{$t('breadcrumb.tracking-mgt.booking_tracking')}}</a></li>
                    <li><a href="hotel-status-tracking">{{$t('breadcrumb.tracking-mgt.hotel_status_tracking')}}</a></li>
                    <li><a href="booking-insight">{{$t('breadcrumb.tracking-mgt.booking_insight')}}</a></li>
                    <li><a href="hotel-introduce-signup">{{$t('breadcrumb.tracking-mgt.hotel_introduce_signup')}}</a></li>
                </ul>
            </li>
            <li>
                <a href="javaScript:void(0);">
                    <i class="feather icon-dollar-sign"></i><span>{{$t('breadcrumb.mileage-point-mgt.name')}}</span><i class="feather icon-chevron-right pull-right"></i>
                </a>
                <ul class="vertical-submenu">
                    <li><a href="mp-boosting-mgt">{{$t('breadcrumb.mileage-point-mgt.mp_boosting_mgt')}}</a></li>
                    <li><a href="mp-user-mgt">{{$t('breadcrumb.mileage-point-mgt.mp_user_gmt')}}</a></li>
                </ul>
            </li>
            <li>
                <a href="javaScript:void(0);">
                    <img src="../../assets/images/template/svg-icon/form_elements.svg" class="img-fluid" alt="advanced"><span><a href="service-agreement-mgt">{{$t('breadcrumb.service_agree')}}</a></span>
                </a>

            </li>
            <li>
                <a href="javaScript:void(0);">
                    <i class="feather icon-users"></i><span>{{$t('breadcrumb.acc_lf_side.name')}}</span><i class="feather icon-chevron-right pull-right"></i>
                </a>
                <ul class="vertical-submenu">
                    <li><a href="account-sale-incentive-management">{{$t('breadcrumb.acc_lf_side.account_sale_incentive_history')}}</a></li>
                    <li><a href="staff-management">{{$t('breadcrumb.acc_lf_side.staff_management')}}</a></li>
                    <li><a href="confirm-group-mgt">{{$t('breadcrumb.acc_lf_side.confirm_group_mgt')}}</a></li>
                </ul>
            </li>
            <li>
                <a href="javaScript:void(0);">
                    <i class="feather el-icon-data-line"></i><span>{{$t('breadcrumb.marketing.name')}}</span><i class="feather icon-chevron-right pull-right"></i>
                </a>
                <ul class="vertical-submenu">
                    <li><a href="promotion">{{$t('breadcrumb.marketing.promotion')}}</a></li>
                    <li><a href="invite-friend-mgt">{{$t('breadcrumb.marketing.invite_friend_mgt')}}</a></li>
                    <li><a href="notice">{{$t('breadcrumb.marketing.notice')}}</a></li>
                    <li><a href="notification">{{$t('breadcrumb.marketing.notification')}}</a></li>
                    <li><a href="banner">{{$t('breadcrumb.marketing.banner')}}</a></li>
                    <li><a href="popup">{{$t('breadcrumb.marketing.popup')}}</a></li>
                    <li><a href="sms">{{$t('breadcrumb.marketing.sms')}}</a></li>
                    <li><a href="crm">{{$t('breadcrumb.marketing.crm')}}</a></li>
                    <li><a href="pgpb-mgt">{{$t('breadcrumb.marketing.pgpb_mgt')}}</a></li>
                </ul>
            </li>
            <li>
                <a href="javaScript:void(0);">
                    <i class="feather el-icon-s-tools"></i><span>{{$t('breadcrumb.setting.name')}}</span><i class="feather icon-chevron-right pull-right"></i>
                </a>
                <ul class="vertical-submenu">
                    <li><a href="general-setting">{{$t('breadcrumb.setting.general_setting')}}</a></li>
                </ul>
            </li>
            <!-- <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/apps.svg" class="img-fluid" alt="apps"><span>Apps</span><i class="feather icon-chevron-right pull-right"></i>
                    </a>
                    <ul class="vertical-submenu">
                        <li><a href="javaScript:void(0);">Calender</a></li>
                        <li>
                            <a href="javaScript:void(0);">Email<i class="feather icon-chevron-right pull-right"></i></a>
                            <ul class="vertical-submenu">
                                <li><a href="javaScript:void(0);">Inbox</a></li>
                            </ul>
                        </li>
                        <li><a href="javaScript:void(0);">Kanban Board</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/form_elements.svg" class="img-fluid" alt="form_elements"><span>Forms</span><i class="feather icon-chevron-right pull-right"></i>
                    </a>
                    <ul class="vertical-submenu">

                    </ul>
                </li>
                <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/chart.svg" class="img-fluid" alt="chart"><span>Charts</span><i class="feather icon-chevron-right pull-right"></i>
                    </a>
                    <ul class="vertical-submenu">

                    </ul>
                </li>
                <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/icons.svg" class="img-fluid" alt="icons"><span>Icons</span><i class="feather icon-chevron-right pull-right"></i>
                    </a>
                    <ul class="vertical-submenu">
                    </ul>
                </li>

                <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/tables.svg" class="img-fluid" alt="tables"><span>Tables</span><i class="feather icon-chevron-right pull-right"></i>
                    </a>
                    <ul class="vertical-submenu">

                    </ul>
                </li>
                <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/maps.svg" class="img-fluid" alt="maps"><span>Maps</span><i class="feather icon-chevron-right pull-right"></i>
                    </a>
                    <ul class="vertical-submenu">

                    </ul>
                </li>
                <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/widgets.svg" class="img-fluid" alt="widgets"><span>Widgets</span><span class="badge badge-success pull-right">New</span>
                    </a>
                </li>
                <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/pages.svg" class="img-fluid" alt="pages"><span>Pages</span><i class="feather icon-chevron-right pull-right"></i>
                    </a>
                    <ul class="vertical-submenu">
                        <li>
                            <a href="javaScript:void(0);">Basic<i class="feather icon-chevron-right pull-right"></i></a>
                            <ul class="vertical-submenu">

                            </ul>
                        </li>
                        <li>
                            <a href="javaScript:void(0);">Authentications<i class="feather icon-chevron-right pull-right"></i></a>
                            <ul class="vertical-submenu">
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javaScript:void(0);">
                        <img src="../../assets/images/template/svg-icon/ecommerce.svg" class="img-fluid" alt="ecommerce"><span>eCommerce</span><i class="feather icon-chevron-right pull-right"></i>
                    </a>
                    <ul class="vertical-submenu">
                    </ul>
                </li>-->
        </ul>
    </div>
    <!-- End Navigationbar -->
</div>
<!-- End Sidebar -->
</template>

<script>
export default {
    name: "LeftSidebar",
}
</script>
