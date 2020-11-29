<template>
    <div class="dashboard">
        <div class="rightbar">
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.hotels')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.hotels')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.room-type-mgt')}}</li>
                            </ol>
                        </div>
                    </div>
                    <!-- <div class="col-md-4 col-lg-4">
                        <div class="widgetbar">
                            <button class="btn btn-primary-rgba"><i class="feather icon-plus mr-2"></i>Add</button>
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- End Breadcrumbbar -->

            <!-- Start Contentbar-->
            <div class="contentbar">
                <!-- Start row -->
                <div class="row">
                    <!-- Start col -->
                    <div class="col-lg-12">
                        <div class="card m-b-30">
                            <div class="card-body">
                               
                               
                            </div>
                        </div>
                    </div>
                    <!-- End col -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Datatable from "../../../components/Datatable";

    export default {
        name: "RoomTypeMgt",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                columns: [
                    {
                        prop: 'nickName',
                        hide: 'false',
                        label: 'nickname',
                        type: 'text',
                        width: 200,
                        sortable: true,
                        formatter: this.defaultFormatter,
                    },
                    {
                        prop: 'gender',
                        hide: 'false',
                        label: 'gender',
                        type: 'text',
                        width: 100,
                        sortable: true,
                        formatter: (value) => {
                            return value === 1 ? `${this.$t("table.user.gender.male")}` : value === 2 ? `${this.$t("table.user.gender.female")}` : 'N/A'
                        }
                    },
                    { 
                        prop: 'birthday',
                        hide: 'false',
                         type: 'text', 
                         label: 'birthday',
                          width: 120, 
                          sortable: true, 
                          formatter: this.defaultFormatter 
                    },
                    { 
                        prop: 'email', 
                        hide: 'false',
                        type: 'text', 
                        label: 'email', 
                        width: 270,
                        sortable: true, 
                        formatter: this.defaultFormatter,
                    },
                    { 
                        prop: 'mobile', 
                        hide: 'false',
                        type: 'text', 
                        label: 'mobile', 
                        width: 120, 
                        sortable: true, 
                        formatter: this.defaultFormatter,
                    },
                    {
                        prop: 'firstProvinceName',
                        hide: 'false',
                        label: 'province',
                        type: 'text',
                        width: 160,
                        sortable: true,
                        formatter: (value) => {
                            return value !== null ? value : 'N/A';
                        }
                    },
                    {
                        prop: 'viaApp',
                        hide: 'false',
                        label: 'login_by',
                        type: 'text',
                        width: 150,
                        sortable: true,
                        formatter: (value) => {
                            switch (value) {
                                case 1:
                                    return 'Manual';
                                case 2:
                                    return 'Facebook';
                                case 3:
                                    return 'Google';
                                case 4:
                                    return 'Apple';
                                default:
                                    return 'Undefine';
                            }
                        }
                    },
                    { 
                        prop: 'effectivePoint', 
                        hide: 'false',
                        type: 'text', 
                        label: 'point', 
                        width: 160, 
                        sortable: true, 
                        formatter: this.defaultFormatter 
                    },
                    {
                         prop: 'registerTime', 
                        hide: 'false',
                         type: 'text', 
                         label: 'res_time', 
                         width: 180, 
                         sortable: true, 
                         formatter: this.defaultFormatter 
                    },
                    {
                        prop: 'numOpenApp',
                        hide: 'false',
                        label: 'open-app',
                        type: 'text',
                        width: 140,
                        sortable: true,
                        formatter: (value) => {
                           return value;
                        }
                    },
                    {
                        prop: 'lastOpenApp', 
                        hide: 'false',
                        type: 'text', 
                        label: 'last_op_app', 
                        width: 180, 
                        sortable: true, 
                        formatter: this.defaultFormatter
                    },
                    // {
                    //     prop: 'status',
                    //    sortable: true,
                    //     formatter: (row, col, value, index) => {
                    //         switch (value) {
                    //          label: 'Status',
                    //     width: 120,
                    //         case 0:
                    //                 return 'Deleted';
                    //             case 1:
                    //                 return 'Active';
                    //             case 2:
                    //                 return 'Inactive';
                    //             default:
                    //                 return 'N/A';
                    //         }
                    //     }
                    // },
                ],
                tableName: 'users-detail',
                tableApi:  this.appConfig.api.endpoint.users,
                tableLabel: 'user',
                tableData: [],
                totalItems: 0,
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
                mobileDevices: {},
                static: {},
            }
        },
        async created(){
            let current_page = localStorage.getItem("current_page");
            if(current_page == 'null'){
                localStorage.setItem("current_page", '1');
            }
        },
        mounted() {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.users+'?status=1';
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    let data = response.data.data;
                    self.tableData = data.appUsers;
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
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.users +
                    `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
                axios.get(url)
                    .then(function (response) {
                        self.loading    = false;
                        localStorage.setItem("curent_page", args.currentPage);
                        let data        = response.data.data;
                        self.tableData  = data.appUsers;
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
        },
    }
</script>
