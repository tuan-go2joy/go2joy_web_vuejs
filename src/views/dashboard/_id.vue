
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
                                    <el-input type="text" disabled="disabled" v-model="content.title1"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.dashboard.detail.title1')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.display"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.dashboard.detail.title2')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.lastUpdate"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.dashboard.detail.title3')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.title1"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.dashboard.detail.display')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.title2"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.dashboard.detail.last_update')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.title3"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.dashboard.detail.content')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.content"></el-input>
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
        name: "DashboardDetail",
        data() {
            return {
                content: [],
            }
        },
        async created(){
            const self = this;
            const id = this.$route.query.sn;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.homeCategories+'/'+id;
            await axios.get(url)
                .then(async function (response) {
                    self.content = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                })
           
        },
        methods: {
            
        }
    }
</script>

