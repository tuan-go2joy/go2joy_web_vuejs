
<template>
    <div class="dashboard">
        <div class="rightbar" >
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.home')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item "><a href="dashboard">{{$t('breadcrumb.dashboard')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.detail')}}</li>
                            </ol>
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- End Breadcrumbbar -->
            <!-- Start Contentbar-->
            <div v-if="content" class="contentbar">
                <div class="card m-b-30 customs-detail-bar">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.dashboard.detail.category')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" v-model="content.title1"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.dashboard.detail.title1')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-checkbox v-model="content.display"></el-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="right-content">
                                <el-button  type="info" size="large" @click="$router.go(-1)">
                                    {{$t('table.counseling.button.back')}}
                                </el-button>
                                <el-button  type="success" size="large" @click="onCreate">
                                    <i class="feather icon-save mr-2"/>
                                    {{$t('table.counseling.button.edit')}}
                                </el-button>
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
        name: "DashboardEdit",
        data() {
            return {
                content: [],
                id:      this.$route.query.sn
            }
        },
        async created(){
            const self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.homeCategories+'/'+this.id;
            await axios.get(url)
                .then(function (response) {
                    self.content = response.data.data;
                    self.content.display = self.content.display = 1 ? true : false
                })
                .catch(error => {
                    console.log(error);
                })
           
        },
        methods: {
            async onCreate(){
                const self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+this.getLocalStorageWithExpiry('access_token')
                }
                let url = this.appConfig.api.url+this.appConfig.api.endpoint.homeCategories+'/'+this.id;
                await axios.put(url,{
                        title1:  self.content.title1,
                        display: self.content.display == true ? 1 : 0,
                    }).then(async function (response) {
                        await axios.get(url)
                            .then(function (res) {
                                self.content = res.data.data
                                self.$message({
                                    type:    'success',
                                    message: `${self.$t("table.detail.edit.message.success")}`
                                });
                            })
                            .catch(error => {
                                self.$message({
                                    type:   'error',
                                    message: error
                                });
                            })
                    }).catch(error => {
                        const data = error.response.data;
                        self.$message({
                            type:   'error',
                            message: data.message
                        });
                    })
            }
        }
    }
</script>

