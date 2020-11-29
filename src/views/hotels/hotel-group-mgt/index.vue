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
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.hotel-group-mgt')}}</li>
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
                            <datatable 
                            :loading="loading" 
                            :columns="columns" 
                            :data="tableData" 
                            :total="totalItems" 
                            :pageSize="pageSize" 
                            :pageSizes="pageSizes" 
                            :tableLabel="tableLabel" 
                            :actionsEdit="actionsEdit" 
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
    name: "HotelGrouptMgt",
    components: {
        Datatable,
    },
    data() {
        return {
            loading: true,
            columns: [{
                    prop: 'name',
                    hide: 'false',
                    label: 'groupname',
                    type: 'text',
                    width: 200,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'ownerName',
                    hide: 'false',
                    type: 'text',
                    label: 'ownername',
                    width: 150,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'ownerTel',
                    hide: 'false',
                    type: 'text',
                    label: 'ownertel',
                    width: 150,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'ownerEmail',
                    hide: 'false',
                    type: 'text',
                    label: 'owneremail',
                    width: 230,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'companyName',
                    hide: 'false',
                    type: 'text',
                    label: 'companyname',
                    width: 170,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'businesLisenceNumber',
                    hide: 'false',
                    type: 'text',
                    label: 'businesslisencenumber',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'companyAddress',
                    hide: 'false',
                    type: 'text',
                    label: 'companyaddress',
                    width: 170,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'companyTel',
                    hide: 'false',
                    type: 'text',
                    label: 'companytel',
                    width: 150,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'companyEmail',
                    hide: 'false',
                    type: 'text',
                    label: 'companyemail',
                    width: 150,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'totalHotel',
                    hide: 'false',
                    type: 'text',
                    label: 'totalhotel',
                    width: 150,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
            ],
            tableName: 'hotels-detail',
            tableApi: this.appConfig.api.endpoint.hotelGroups,
            tableLabel: 'hotels',
            tableData: [],
            totalItems: 0,
            pageSizes: [10, 15, 20, 30, 50],
            pageSize: 10,
            mobileDevices: {},
            static: {},
            actionsEdit: 1
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
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelGroups + '?status=1&limit=' + `${this.pageSize}`;
        console.log('url', url)
        axios.get(url)
            .then(function (response) {
                // console.log('response', response)
                self.loading = false;
                let data = response.data.data;
                // console.log('data', response.data)
                self.tableData = data.hotelGroups;
                self.totalItems = data.meta.total;
                // console.log('self.totalItems', self.totalItems)
               
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
       
        onCreate() {
            this.$router.push(`/hotel-management/hotel-group-mgt-create`);
        },
        reloadTableData(args) {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelGroups +
                `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    localStorage.setItem("curent_page", args.currentPage);
                    let data = response.data.data;
                    self.tableData = data.hotelGroups;
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
