<template>
    <div class="theme-default">
        <div class="header-page" v-if="token">
            <headerbar/>
        </div> 
        <div class="leftbar" v-if="token">
                <left-sidebar/>
        </div> 
        <div id="app" v-loading.fullscreen.lock="fullscreenLoading">
            <router-view></router-view>
        </div>

        <right-sidebar v-if="token"/>
        <div class="footer-page" v-if="token">
            <footerbar/>
        </div>
    </div>
</template>

<script>
    import Footerbar from "../components/partials/Footerbar";
    import Headerbar from "../components/partials/Headerbar";
    import LeftSidebar from "../components/partials/LeftSidebar";
    import RightSidebar from "../components/partials/RightSidebar";
    export default {
        name: "default",
        components: {
            RightSidebar,
            LeftSidebar,
            Headerbar,
            Footerbar,
        },
        data: function () {
            return {
                fullscreenLoading: false,
                token: localStorage.getItem("access_token"),
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                spinner: 'go2joy-icon-loading',
            });
            setTimeout(() => {
                loading.close();
            }, 1000);
        },
    }
</script>

<style lang="css">
@import '../assets/scss/main.scss';
@import '~vue-awesome-notifications/dist/styles/style.css';
@import'~bootstrap/dist/css/bootstrap.css';
.go2joy-icon-loading {
    position: fixed !important;
    left: 0px !important;
    top: 0px !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 9999 !important;
    background: url("https://www.upsieutoc.com/images/2020/09/30/anim_loading.gif") 50% 50% no-repeat !important;
    background-size: 100px 100px !important;
    opacity: 1 !important;
    animation: loader 4s infinite ease !important;
}

</style>
