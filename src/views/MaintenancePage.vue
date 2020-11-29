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
                            <img src="/assets/images/images/logo.png" class="img-fluid error-logo" alt="logo">
                            <img src="/assets/images/error/maintenance.svg" class="img-fluid error-image" alt="maintenance">
                            <h4 class="error-subtitle mb-4">System is under maintenance</h4>
                            <p class="mb-4">We sincerely apologize for the inconvenience. Please, come back later.</p>
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
        name: "MaintenancePage"
    }
</script>
