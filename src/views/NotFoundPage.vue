<template>
    <div id="containerbar" class="containerbar authenticate-bg">
        <!-- Start Container -->
        <div class="container">
            <div class="auth-box error-box">
                <!-- Start row -->
                <div class="row no-gutters align-items-center justify-content-center">
                    <!-- Start col -->
                    <div class="col-md-8 col-lg-6">
                        <div class="text-center">
                            <img src="/static/images/images/logo.png" class="img-fluid error-logo" alt="logo">
                            <img src="/static/images/error/404.svg" class="img-fluid error-image" alt="404">
                            <h4 class="error-subtitle mb-4">Oops! Page not found</h4>
                            <p class="mb-4">We did not find the page you are looking for. Please return to previous page or visit home page. </p>
                            <a href="javascript:return(0);" @click="$router.back()" class="btn btn-success font-16"><i class="feather icon-corner-up-left mr-2"></i>Go back</a>
                        </div>
                    </div>
                    <!-- End col -->
                </div>
                <!-- End row -->
            </div>
        </div>
        <!-- End Container -->
    </div>
</template>

<script>
    export default {
        name: "NotFoundPage"
    }
</script>
