
<template>
    <div class="dashboard">
        <div class="rightbar" >
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.u_lf_side.user')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                 <li class="breadcrumb-item" aria-current="page"><a href="users">{{$t('breadcrumb.u_lf_side.name')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.detail')}}</li>
                            </ol>
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- End Breadcrumbbar -->
            <!-- Start Contentbar-->
            <div v-if="user" class="contentbar">
                <div class="card m-b-30 customs-detail-bar">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.user_id')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.email"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.nickname')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.nickName"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.gender')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.gender == 1 ? '' : ''"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.birthday')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.birthday"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.email')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.email"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.mobile')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.mobile"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.address')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.address"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.open_app')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.address"></el-input>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.member_id')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.memberId"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.login_by')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.viaApp == 1 ? 'Manual' : user.viaApp == 2 ? 'Facebook' : user.viaApp == 3 ? 'Google' : 'Apple'"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.device_code')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled"  v-model="user"></el-input>
                                </div> 
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.status')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.last_open_app')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.res_time')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.createTime"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.last_update')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.lastUpdate"></el-input>
                                </div>
                            </div>
                             <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.user.detail.open_app_last')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.address"></el-input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contentbar" v-else>
                <div class="card m-b-30" style="text-align: center;padding: 20px;">
                    <p>No data</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "UserManagement",
        data() {
            return {
                loading: true,
                user: {},
            }
        },
        async created(){
            const self = this;
            const id = this.$route.query.sn;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url_user = this.appConfig.api.url + this.appConfig.api.endpoint.users+'/'+id;
            await axios.get(url_user)
                .then(async function (response) {
                    self.user = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                })
           
        },
        methods: {
            
        }
    }
</script>

