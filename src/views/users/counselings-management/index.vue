<template>
    <div class="dashboard">
        <div class="rightbar">
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.u_lf_side.counseling')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.u_lf_side.counseling')}}</li>
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
                                    :tableName="tableName"
                                    :searchAble="false" 
                                    :actions="actions"
                                    :actionsWidth="actionsWidth"
                                    :exportFile="false"
                                    @onEditTable="onEditUser"
                                    @onDeleteTable="onDeleteUser"
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
        name: "CounselingManagement",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                columns: [
                    {
                        prop: 'scope',
                        hide: 'false',
                        type: 'text',
                        label:'scope',
                        width: 290,
                        sortable: true,
                        formatter: (value) => {
                            return value === 1 ? 'public' : 'private'
                        } 
                    },
                    {
                        prop:  'title',
                        hide:  'false',
                        type:  'text',
                        label: 'title',
                        width: 360,
                        sortable: true,
                        formatter: this.defaultFormatter 
                    },
                    {   prop:  'nickName', 
                        hide:  'false',
                        type:  'text',
                        label: 'nickname', 
                        width: 160, 
                        sortable: true, 
                        formatter: this.defaultFormatter 
                    },
                    {   prop: 'createTime', 
                        hide: 'false',
                        type: 'text',
                        label:'create_time', 
                        width: 220, 
                        sortable: true, 
                        formatter: this.defaultFormatter, 
                    },
                    {  
                        prop: 'lastUpdate', 
                        hide: 'false',
                        type: 'text',
                        label:'last_update', 
                        width: 180, 
                        sortable: true, 
                        formatter: this.defaultFormatter, 
                    },
                    
                ],
                tableName: 'counselings-detail',
                tableLabel: 'counseling',
                tableData: [],
                totalItems: 0,
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
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
            let isCreated =  localStorage.getItem("create_success");
            if(isCreated){
                this.$message({
                    type:    'success',
                    message: `${this.$t("table.user.create.message.success")}`
                });
                localStorage.removeItem("create_success");  
            }
        },
        async mounted() {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.counselings+'?status=1';
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    let data = response.data.data;
                    self.tableData = data.counselings;
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
            onCreate(){
               this.$router.push(`/hotel-management/counselings-create`);
            },
            reloadTableData(args) {
                let self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                }
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.counselings +
                    `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
                axios.get(url)
                    .then(function (response) {
                        self.loading    = false;
                        localStorage.setItem("curent_page", args.currentPage);
                        let data        = response.data.data;
                        self.tableData  = data.counselings;
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
            onEditUser(id){
                this.$router.push(`/hotel-management/counselings-detail?sn=${id}`);
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
                        let url = this.appConfig.api.url + this.appConfig.api.endpoint.counselings + '/' + id;
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
        }
    }
</script>
