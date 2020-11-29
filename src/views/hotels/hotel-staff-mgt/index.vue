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
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.hotel-staff-mgt')}}</li>
                        </ol>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="widgetbar">
                        <button class="btn btn-primary-rgba" @click="onCreate"><i class="feather icon-plus mr-2"></i>Add</button>
                    </div>
                </div>
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
                            <datatable :loading="loading" 
                            :columns="columns" 
                            :data="tableData" 
                            :total="totalItems"
                            :pageSize="pageSize" 
                            :pageSizes="pageSizes" 
                            :tableLabel="tableLabel" 
                            :tableName="tableName" 
                            :actions="actions" 
                            :actionsWidth="actionsWidth" 
                            :searchAble="false" 
                            :exportFile="false" 
                            @onEditTable="onEditHotelFacility" 
                           
                            @reloadTableData="reloadTableData">
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
    name: "FacilityMgt",
    components: {
        Datatable,
    },
    data() {
        return {
            loading: true,
            columns: [{
                    prop: 'fullName',
                    hide: 'false',
                    label: 'full_name_staff_hotel',
                    type: 'text',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'userId',
                    hide: 'false',
                    type: 'text',
                    label: 'user_id_staff_hotel',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'role',
                    hide: 'false',
                    prop_child: "name",
                    type: 'text',
                    label: 'role_staff_hotel',
                    width: 120,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'email',
                    hide: 'false',
                    type: 'text',
                    label: 'email_staff_hotel',
                    width: 160,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'mobile',
                    hide: 'false',
                    type: 'text',
                    label: 'mobile_staff_hotel',
                    width: 140,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'receiveSms',
                    hide: 'false',
                    type: 'text',
                    label: 'receive_sms_staff_hotel',
                    width: 140,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'status',
                    hide: 'false',
                    type: 'text',
                    label: 'enable_staff_hotel',
                    width: 120,
                    sortable: true,
                    formatter: this.defaultFormatter,
                }
            ],
            tableName: 'hotels-facility',
            tableApi: this.appConfig.api.endpoint.hotelStaff,
            tableLabel: 'hotels',
            tableData: [],
            totalItems: 0,
            pageSizes: [10, 15, 20, 30, 50],
            pageSize: 10,
            mobileDevices: {},
            static: {},
            actionsEdit: 1,
            actionsWidth: 200,
            actions:[
                {
                    lable:        'edit',
                    type:         'button',
                    onClick:      `onEdit`,
                    clickActions: 'edit',
                    param:        'sn'
                },
               
            ],
        }
    },
    async created() {
        let current_page = localStorage.getItem("current_page");
        if (current_page == 'null') {
            localStorage.setItem("current_page", '1');
        }
    },
    mounted() {
        let self = this;
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
        }
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelStaff + '?status=1&limit=' + `${this.pageSize}`;
        console.log('url', url)
        axios.get(url)
            .then(function (response) {
                console.log('response', response)
                self.loading = false;
                let data = response.data.data;
                console.log('data', response.data)
                self.tableData = data.staffs;
                self.totalItems = data.meta.total;
                console.log('self.tableData', self.tableData)
                console.log('self.totalItems', self.totalItems)
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
        onEditHotelFacility(id){
            this.$router.push(`/hotel-management/hotels-facility?sn=${id}`);
        },
        onCreate() {
            this.$router.push(`/hotel-management/hotel-facility-mgt-create`);
        },
        async onDeleteHotelFacility(id){
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
                    let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelStaff + '/' + id;
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
        reloadTableData(args) {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelStaff +
                `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    localStorage.setItem("curent_page", args.currentPage);
                    let data = response.data.data;
                    self.tableData = data.staffs;
                    self.totalItems = data.meta.total;
                    self.pageSize = args.pageSize;
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
