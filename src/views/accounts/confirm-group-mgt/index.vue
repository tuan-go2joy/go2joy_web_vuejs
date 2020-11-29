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
                                    :incentive="false" 
                                    :action="false" 
                                    :exportFile="false"
                                    :actions="actions"
                                    :actionsWidth="actionsWidth"
                                    @onEditTable="onEditStaff"
                                    @onDeleteTable="onDeleteStaff"
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
        name: "ConfirmGroupMgt",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                columns: [
                    {
                        prop: 'fullName',
                        type: 'link',
                        href: 'staff-detail',
                        label: 'label_header_staff_management.full_name',
                        width: 290,
                        formatter: this.defaultFormatter 
                    },
                    {
                        prop: 'userId',
                        type: 'text',
                        label: 'label_header_staff_management.user_id',
                        width: 290,
                        formatter: this.defaultFormatter 
                    },
                    {   prop: 'role', 
                        prop_child: 'name',
                        type: 'text',
                        label: 'label_header_staff_management.role', 
                        width: 160, 
                        formatter: this.defaultFormatter
                    },
                    {   prop: 'mobile', 
                        type: 'text',
                        label: 'label_header_staff_management.mobile', 
                        width: 220, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop: 'email', 
                        type: 'text',
                        label: 'label_header_staff_management.email', 
                        width: 200, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop: `region`, 
                        type: 'text',
                        width: 130, 
                        label: 'label_header_staff_management.region', 
                        formatter: this.defaultFormatter
                    },
                    {  
                        prop: `detail`, 
                        type: 'link',
                        width: 130, 
                        label: 'label_header_staff_management.history', 
                        formatter: (value) => {
                            return value == 1 ? `${this.$t("table.account_sale.label_header.label_header_staff_management.button.history")}` : `${this.$t("table.account_sale.label_header.label_header_staff_management.button.history")}`;
                        }
                    }
                ],
                tableLabel: 'account_sale',
                tableData: [],
                totalItems: 0,
                arrKeyword:['key'],
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
                actionsWidth: 250,
                actions:[
                    {
                        lable:        'edit',
                        type:         'button',
                        onClick:      `onEdit`,
                        clickActions: 'edit',
                    },
                    {
                        lable:        'delete',
                        type:         'button',
                        onClick:      `onDelete`,
                        clickActions: 'popup',
                    },
                ],
            }
        },
        async created(){
            this.loading = false;
        },
        async mounted() {
           let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.staffs+'?status=1';
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    let data = response.data.data;
                    self.tableData = data.staffs;
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
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.staffs +
                    `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
                axios.get(url)
                    .then(function (response) {
                        self.loading    = false;
                        localStorage.setItem("curent_page", args.currentPage);
                        let data        = response.data.data;
                        self.tableData  = data.staffs;
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
            onCreate(){
                this.$router.push(`/hotel-management/create-detail`);
            },
            onEditStaff(){

            },
            onDeleteStaff(id){
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
                        let url = this.appConfig.api.url + this.appConfig.api.endpoint.staffs + '/' + id;
                        await axios.delete(url)
                                .then(async function (response) {
                                    await self.reloadTableData(argsDB);
                                    this.$message({
                                        type: 'success',
                                        message: `${this.$t("table.deleteButton.message_success")}`
                                    });
                                })
                                .catch(error => {
                                    this.$message({
                                        type: 'info',
                                        message: error
                                    });   
                                })
                        
                    }).catch(error => {
                        this.$message({
                            type: 'info',
                            message: error
                        });          
                    });
            }
        }
    }
</script>s