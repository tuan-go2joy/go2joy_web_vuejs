<template>
    <div class="dashboard">
        <div class="rightbar">
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.u_lf_side.user')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.u_lf_side.user')}}</li>
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
                                <p class="static">{{ $t('table.user.static')}}: <span class="red-text"> {{ static.total }} </span> ( iOS: <span class="red-text">{{ static.iOS }}</span> - Android: <span class="red-text">{{ static.android }}</span> ) {{ $t('table.user.mobile_devices')}}: <span class="red-text">{{ mobileDevices.total }}</span> ( {{ $t('table.user.mobile_devices')}} iOS: <span class="red-text">{{ mobileDevices.iOS }}</span> - {{ $t('table.user.mobile_devices')}} Android: <span class="red-text">{{ mobileDevices.android }} </span>)</p>
                                <datatable 
                                    :loading="loading" 
                                    :columns="columns"
                                    :data="tableData" 
                                    :total="totalItems"
                                    :pageSize="pageSize"
                                    :pageSizes="pageSizes" 
                                    :tableName="tableName" 
                                    :tableLabel="tableLabel" 
                                    :incentive="true" 
                                    :actions="actions"
                                    :actionsWidth="actionsWidth"
                                    :searchAble="false" 
                                    :exportFile="true" 
                                    @onExporTable="onExportUser"
                                    @onEditTable="onEditUser"
                                    @onDeleteTable="onDeleteUser"
                                    @onDerect="onDerect"
                                    @reloadTableData="reloadTableData"
                                    @getStaticAndMobileDevices="getStaticAndMobileDevices">
                                </datatable>
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
        name: "UserManagement",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                columns: [
                    {
                        prop:  'nickName',
                        hide: 'false',
                        label: 'nickname',
                        type:  'link',
                        sn:    'sn',
                        href:  'users-detail',
                        width: 200,
                        sortable: true,
                        formatter: this.defaultFormatter,
                    },
                    {
                        prop:  'gender',
                        hide: 'false',
                        label: 'gender',
                        type:  'text',
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
                ],
                tableName: 'users-detail',
                tableLabel: 'user',
                tableData: [],
                totalItems: 0,
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
                mobileDevices: {},
                static: {},
                actionsWidth: 250,
                actions:[
                    {
                        lable:        'edit',
                        type:         'button',
                        onClick:      `onEdit`,
                        clickActions: 'edit',
                        param:        'sn'
                    },
                    {
                        lable:        'delete',
                        type:         'button',
                        onClick:      `onDelete`,
                        clickActions: 'popup',
                        param:        'sn'
                    },
                ],
            }
        },
        async created(){
            let current_page = localStorage.getItem("current_page");
            if(current_page == 'null'){
                localStorage.setItem("current_page", '1');
            }
            await this.getStaticAndMobileDevices();
        },
        async mounted() {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.users;
            await axios.get(url)
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
                        this.$message({
                            type: 'success',
                            message: error
                        });
                    })
            },
            async getStaticAndMobileDevices(args){
                let self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                }
                let urlMobileDevices  = this.appConfig.api.url + this.appConfig.api.endpoint.static + this.appConfig.api.endpoint.mobileDevices+`?dateFrom=${args && args.dateFrom ? self.formatDate(args.dateFrom,false) : ''}&dateTo=${args && args.dateTo ? self.formatDate(args.dateTo,false) : ''}`;
                let urlStatic         = this.appConfig.api.url + this.appConfig.api.endpoint.static + `/users?dateFrom=${args && args.dateFrom ? self.formatDate(args.dateFrom,false) : ''}&dateTo=${args && args.dateTo ? self.formatDate(args.dateTo,false) : ''}`;
                await axios.get(urlMobileDevices)
                    .then(function (response) {
                        self.mobileDevices = response.data.data
                    })
                    .catch(error => {
                        this.$message({
                            type: 'error',
                            message: error
                        });
                    })
                await axios.get(urlStatic)
                    .then(function (response) {
                        self.static = response.data.data
                    })
                    .catch(error => {
                        this.$message({
                            type: 'error',
                            message: error
                        });
                    })
            },
            onEditUser(id){
                this.$router.push(`/hotel-management/users-edit?sn=${id}`);
            },
            async onDeleteUser(id){
                this.$confirm(`${this.$t("table.deleteButton.message_alert")}`, `${this.$t("table.deleteButton.message_warning")}`, {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                    }).then( async () => {
                        const self = this;
                        let argsDB = {};
                        argsDB.currentPage = localStorage.getItem("current_page");
                        argsDB.pageSize    = 10;
                        argsDB.keyword     = ' ';
                        axios.defaults.headers = {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                        }
                        let url = this.appConfig.api.url + this.appConfig.api.endpoint.users + '/' + id;
                        await axios.delete(url)
                                .then(async function (response) {
                                await self.reloadTableData(argsDB);
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                        this.$message({
                            type: 'success',
                            message: `${this.$t("table.deleteButton.message_success")}`
                        });
                    }).catch(error => {
                        this.$message({
                            type: 'info',
                            message: error
                        });          
                    });
            },
            async onExportUser(filtering){
                const self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                }
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.users +`?keyword&dateFrom=${filtering.dateFrom}&dateTo=${filtering.dateTo}`;
                await axios.get(url)
                        .then(function (response) {
                            self.$message({
                                type: 'success',
                                message:  `${self.$t("table.exportButton.export_success")}`
                            });
                        })
                        .catch(error => {
                            self.$message({ 
                                type: 'info',
                                message:  `${self.$t("table.exportButton.export_fail")}`
                            });   
                        })
            },
            onDerect(href,query){
                this.$router.push(`/hotel-management/${href}?sn=${query}`);
            }
        },
    }
</script>
