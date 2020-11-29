
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
                                <li class="breadcrumb-item "><a href="staff-management">{{$t('breadcrumb.acc_lf_side.staff_management')}}</a></li>
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
                                    <p>{{ $t('table.account_sale.detail.full_name')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.fullName"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.account_sale.detail.enable')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.status">{{ content.status == 1 ? '' : ' '}}</el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.account_sale.detail.user_id')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.userId"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.account_sale.detail.role')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.title1"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.account_sale.detail.mobile')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.mobile"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.account_sale.detail.email')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.email"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.account_sale.detail.Address')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.address"></el-input>
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
        name: "dashboard-detail",
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
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.staffs+'/'+id;
            await axios.get(url)
                .then(async function (response) {
                    self.content = response.data.data;
                })
                .catch(error => {
                    self.$message({
                        type:   'error',
                        message: error.response.data
                    });
                })
           
        },
        methods: {
           
        }
    }
</script>

