<template>
    <div class="dashboard">
        <div class="rightbar" >
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.setting.name')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.setting.name')}}</li>
                            </ol>
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- End Breadcrumbbar -->
            <!-- Start Contentbar-->
            <div class="contentbar">
                <div class="card m-b-30 customs-detail-bar">
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.setting.general_setting.update_setting')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-button  type="success" size="large" @click="onCreateUser">
                                <i class="feather el-icon-refresh"/>
                                {{$t('table.setting.general_setting.button.refresh')}}
                            </el-button>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.setting.general_setting.change_new_to_normal_after')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="counselings.content"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">

                        <div class="col-md-2">
                            <p>{{ $t('table.setting.general_setting.block_booking_from')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="counselings.content"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.setting.general_setting.last_version')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="counselings.content"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.setting.general_setting.partner_last_version')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="counselings.content"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.setting.general_setting.cineJoy_last_version')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="counselings.content"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.setting.general_setting.refresh_cache_data')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-button  type="success" size="large" @click="onCreateUser">
                                <i class="feather el-icon-refresh"/>
                                {{$t('table.setting.general_setting.button.refresh')}}
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "setting-generals",
        components: {
        },
        data() {
            return {
                setting: [],
                counselings: {
                    content: ''
                }
            }
        },
        async created(){
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.settings+'?status=1';
            await axios.get(url)
                    .then(function (response) {
                        self.loading = false;
                        let data = response.data.data;
                        self.setting = data;
                    })
                    .catch(error => {
                        self.loading = false;
                        try {
                            const data = error.response.data;
                            self.$message({
                                type:   'error',
                                message: data.message
                            });
                        } catch (err) {
                            self.$message({
                                type:   'error',
                                message: 'Can\'t connect to server. Please try again later.'
                            });
                        }
                    })
        },
        methods: {
            onCreateUser(){

            }
        }
    }
</script>

