<template>
    <div class="dashboard">
        <div class="rightbar">
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.u_lf_side.device')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.u_lf_side.device')}}</li>
                            </ol>
                        </div>
                    </div>
                    <!-- <div class="col-md-4 col-lg-4">
                        <div class="widgetbar">
                            <button class="btn btn-primary-rgba"><i class="feather icon-plus mr-2"></i>Actions</button>
                        </div>
                    </div>-->
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
                                    :searchAble="false" 
                                    :action="false" 
                                    :incentive="true" 
                                    :exportFile="false" 
                                    @reloadTableData="reloadTableData">
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
        name: "DeviceManagement",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                columns: [
                    {
                        prop: 'mobileUserId',
                        hide: 'false',
                        type: 'text',
                        label:'mobile_user_id',
                        width: 290,
                        sortable: true,
                        formatter: this.defaultFormatter,
                    },
                    {
                        prop:       'userLogin',
                        hide:       'false',
                        prop_child: 'nickName',
                        type:       'text',
                        label:      'app_user_nickName',
                        width: 160,
                        sortable: true,
                        formatter: this.defaultFormatter 
                    },
                    {   prop:       'firstSignup', 
                        hide:       'false',
                        prop_child: 'nickName',
                        type:       'text',
                        label:      'first_app_user_nickName', 
                        width: 160, 
                        sortable: true, 
                        formatter: this.defaultFormatter 
                    },
                    {   
                        array_prop:['os','osVersion','deviceCode'],
                        type:      'multi_text',
                        label:     'device_code', 
                        width: 280, 
                        sortable: true, 
                        formatter: this.defaultFormatter, 
                    },
                    {  
                        prop: 'pushNotification', 
                        hide: 'false',
                        type: 'text',
                        label:'push_notification', 
                        width: 130, 
                        sortable: true, 
                        formatter: (row, col, value, index) => {
                            return value === 1 ? '✔' : '✘'
                        } 
                    },
                    {  
                        prop: 'address', 
                        hide: 'false',
                        type: 'text',
                        label:'last_open_app', 
                        width: 550, 
                        sortable: true, 
                        formatter: this.defaultFormatter,
                    },
                    {
                        prop: 'appVersion',
                        hide: 'false',
                        type: 'text',
                        label:'app_version',
                        width: 120,
                        sortable: true,
                        formatter: (value) => {
                            return value !== null ? value : 'N/A';
                        }
                    },
                    {
                        prop: 'status',
                        hide: 'false',
                        type: 'text',
                        label:'install',
                        width: 100,
                        sortable: true,
                        formatter: (value) => {
                            return value === 1 ? '✔' : '✘'
                        } 
                    },
                    {
                        prop:       'province',
                        hide:       'false',
                        prop_child: 'name',
                        type:       'text',
                        label:      'register_province',
                        width: 180,
                        sortable: true,
                        formatter: this.defaultFormatter,

                    },
                    {   
                        prop: 'registerTime', 
                        hide: 'false',
                        type: 'text',
                        label:'res_time', width: 180, 
                        sortable: true, 
                        formatter: this.defaultFormatter 
                    },
                    {   
                        prop: 'lastUpdate', 
                        hide: 'false',
                        type: 'text',
                        label:'last_update', 
                        width: 180, sortable: true, 
                        formatter: this.defaultFormatter 
                    }
                ],
                tableLabel: 'devices',
                tableData: [],
                totalItems: 0,
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
            }
        },
        async created(){
            
        },
        async mounted() {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.mobileDevices+'?status=1';
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    let data = response.data.data;
                    self.tableData = data.mobileDevices;
                    self.totalItems = data.meta.total;
                })
                .catch(error => {
                    self.loading = false;
                    try {
                        const data = error.response.data;
                        this.$awn.alert(data.message);
                    } catch (err) {
                        this.$awn.alert('Can\'t connect to server.<br/>Please try again later.');
                    }
                })
        },
        methods: {
            reloadTableData(args) {
                let self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                }
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.mobileDevices +
                    `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? this.formatDate(args.dateFrom,false) : ''}&dateTo=${args.dateTo ? this.formatDate(args.dateTo,false) : ''}`;
                axios.get(url)
                    .then(function (response) {
                        self.loading    = false;
                        localStorage.setItem("curent_page", args.currentPage);
                        let data        = response.data.data;
                        self.tableData  = data.mobileDevices;
                        self.totalItems = data.meta.total;
                        self.pageSize   = args.pageSize;
                    })
                    .catch(error => {
                        self.loading = false;
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
