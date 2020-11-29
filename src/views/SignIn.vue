<template>
    <div class="containerbar authenticate-bg">
        <!-- Start Container -->
        <div class="container">
            <div class="auth-box login-box">
                <!-- Start row -->
                <div class="row no-gutters align-items-center justify-content-center">
                    <!-- Start col -->
                    <div class="col-md-6 col-lg-5">
                        <!-- Start Auth Box -->
                        <form class="auth-box-right" id="appLogin" v-on:submit.prevent="onSubmit">
                            <div class="card">
                                <div class="card-body" >
                                    <div>
                                        <div class="form-head">
                                            <a href="" class="logo">
                                                <img src="assets/images/template/images/logo.png" class="img-fluid" alt="logo">
                                            </a>
                                        </div>
                                        <h4 class="text-primary my-4">Hotel Management</h4>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="User ID"
                                                   id="userId" v-model="userId" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password"
                                                   v-model="password" required>
                                        </div>
                                        <div class="form-row mb-3">
                                            <div class="col-sm-6">
                                                <div class="custom-control custom-checkbox text-left">
                                                    <input type="checkbox" class="custom-control-input"
                                                           v-model="remember" id="remember">
                                                    <label class="custom-control-label font-14" for="remember">Remember Me</label>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="forgot-psw">
                                                    <a id="forgot-psw" href="javascript:return(0);" @click="$router.push('coming-soon')" class="font-14">Forgot Password?</a>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-success btn-lg btn-block font-18">Sign in</button>
                                    </div>
                                    <div class="login-or">
                                        <h6 class="text-muted">OR</h6>
                                    </div>
                                    <p class="mb-0 mt-3">Don't have a account? <a href="javascript:return(0);" @click="$router.push('coming-soon')">Sign up</a></p>
                                </div>
                            </div>
                        </form>
                        <!-- End Auth Box -->
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
        layout: 'blank',
        name: 'SignIn',
        data() {
            return {
                userId: "",
                password: "",
                remember: 0
            }
        },
        methods: {
            async onSubmit() {
                let self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                }
                let obj = {
                    userId: self.userId,
                    password: CryptoJS.MD5(self.password).toString(),
                    remember: self.remember ? 1 : 0
                }
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.signIn;
                axios.post(url, obj)
                    .then(function (response) {
                        const accessToken = response.data.data.accessToken;
                        if (obj.remember) {
                            // Token lifetime is 3 months
                            self.setLocalStorageWithExpiry('access_token', accessToken, 60 * 60 * 24 * 90 * 1000);
                        } else {
                            // Token lifetime is 1 day
                            self.setLocalStorageWithExpiry('access_token', accessToken, 60 * 60 * 24 * 1000);
                        }
                        window.location.href = 'dashboard';
                    })
                    .catch(error => {
                        try {
                            const data = error.response.data;
                            this.$awn.alert(data.message);
                        } catch (err) {
                            this.$awn.alert('Can\'t connect to server.<br/>Please try again later.');
                        }
                    })
            },
        }
    }
</script>

<style lang="css" scoped>
    .text-primary {
        color: #ff6400 !important;
    }
</style>
