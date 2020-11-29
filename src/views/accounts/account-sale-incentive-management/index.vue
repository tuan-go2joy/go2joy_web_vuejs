<template>
    <div class="dashboard">
        <div class="rightbar">
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.acc_lf_side.name')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.acc_lf_side.account_sale_incentive_history')}}</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="widgetbar">
                            <button class="btn btn-primary-rgba" @click="onCreate"><i class="feather icon-plus mr-2"></i>{{$t('table.header.add')}}</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Breadcrumbbar -->
            <div class="contentbar">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card m-b-30">
                            <div class="card-body">
                                <datatable 
                                    :loading="loading" 
                                    :columns="columns" 
                                    :data="tableData" 
                                    :total="totalItems" 
                                    :pageSize="pageSize" 
                                    :pageSizes="pageSizes"
                                    :tableLabel="tableLabel" 
                                    :actions="actions" 
                                    :actionsWidth="actionsWidth" 
                                    :incentive="false" 
                                    :action="false" 
                                    :exportFile="false" 
                                    @onDerect="onDerect">
                                </datatable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Datatable from "../../../components/Datatable";
    export default {
        name: "AccountSaleIncentiveHistoryManagement",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                columns: [
                    {
                        prop:  'incentiveDate',
                        hide:  'false',
                        type:  'text',
                        label: 'incentive_date',
                        width: 290,
                        formatter: this.defaultFormatter 
                    },
                    {
                        prop:       'createdBy',
                        hide:       'false',
                        prop_child: 'fullName',
                        type:       'text',
                        label:      'created_by',
                        width: 290,
                        formatter: this.defaultFormatter 
                    },
                    {   prop:  'status', 
                        hide:  'false',
                        type:  'text',
                        label: 'status', 
                        width: 160, 
                        formatter: (value) => {
                            return value == 1 ? 'Done' : 'Not yet';
                        }
                    },
                    {   prop:  'createTime', 
                        hide:  'false',
                        type:  'text',
                        label: 'created_time', 
                        width: 220, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop:  'confirmTime', 
                        hide:  'false',
                        type:  'text',
                        label: 'confirmed_time', 
                        width: 220, 
                        formatter: this.defaultFormatter 
                    },
                ],
                tableLabel: 'account_sale',
                tableData:  [],
                totalItems: 0,
                arrKeyword: ['key'],
                pageSizes:  [10, 15, 20, 30, 50],
                pageSize:   10,
                actionsWidth: 150,
                actions:[
                    {
                        lable:   'detail',
                        type:    'link2',
                        onClick: 'onDirect',
                        href:    'account-sale-incentive',
                        param:   ['incentiveDate','sn']
                    },
                ],
            }
        },
        async created(){
            this.loading = false;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
        },
        async mounted() {
            let self = this;
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.saleIncentiveHistories;
            axios.get(url)
                .then(function (response) {
                    let data = response.data.data;
                    self.tableData = data.saleIncentiveHistories;
                    self.totalItems = data.meta.total;
                    self.loading = false;
                })
                .catch(error => {
                    self.loading = false;
                    try {
                        const data = error.response.data;
                        self.$message({
                            type:    'error',
                            message: data.message
                        });
                    } catch (err) {
                        self.$message({
                            type:    'error',
                            message: 'Can\'t connect to server. Please try again later.'
                        });
                    }
                })
           
        },
        methods: {
            onCreate(){
                this.$router.push(`/hotel-management/account-sale-incentive`);
            },
            onDerect(href,query){
                this.$router.push(`/hotel-management/${href}?incentiveDate=${query[0]}&sn=${query[1]}`);
            }
        }
    }
</script>s