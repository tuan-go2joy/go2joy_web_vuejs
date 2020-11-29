<template>
<div class="dashboard">
    <div class="rightbar">
        <!-- Start Breadcrumbbar -->
        <div class="breadcrumbbar">
            <div class="row align-items-center">
                <div class="col-md-8 col-lg-8">
                    <h4 class="page-title">{{$t('breadcrumb.booking.booking_report')}}</h4>
                    <div class="breadcrumb-list">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.booking.booking_report')}}</li>
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
                            <datatable :loading="loading" 
                            :columns="columns" 
                            :data="tableData" 
                            :total="totalItems" 
                            :pageSize="pageSize" 
                            :pageSizes="pageSizes" 
                            :tableLabel="tableLabel" 
                            :tableName="tableName" 
                            :searchAble="false" 
                            :exportFile="false"
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
    name: "SendingMailMgt",
    components: {
        Datatable,
    },
    data() {
        return {
            loading: true,
            columns: [{
                    prop: 'hotel',
                    prop_child: 'name',
                    type: 'text',
                    label: 'name',
                    width: 180,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'userId',
                    prop_child: 'hotelStatus',
                    type: 'text',
                    label: 'status',
                    width: 150,
                    sortable: true,
                    formatter: this.defaultFormatter,
                }

            ],
            tableName: 'booking-report',
            tableApi: this.appConfig.api.endpoint.hotelGroups,
            tableLabel: 'hotels',
            tableData: [],
            totalItems: 0,
            pageSizes: [10, 15, 20, 30, 50],
            pageSize: 10,
            mobileDevices: {},
            static: {},
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
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelGroups;
        axios.get(url)
            .then(function (response) {
                self.loading = false;
                let data = response.data.data;
                self.tableData = data.hotelGroups;
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
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.roles + `?page=${args.currentPage}&limit=10&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    localStorage.setItem("curent_page", args.currentPage);
                    let data = response.data.data;
                    self.tableData = data.roless;
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
