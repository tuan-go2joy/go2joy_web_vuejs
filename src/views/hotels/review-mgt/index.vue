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
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.review-mgt')}}</li>
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
                
                <div class="col-lg-12"><p><router-link class="color-000" :to="{ name: 'view-review-mgt'}" >{{$t('table.hotels.label_header.avg_rating_review_hotel')}}</router-link></p></div>
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
                                :searchAble="true" 
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
    name: "ReviewMgt",
    components: {
        Datatable,
    },
    data() {
        return {
            loading: true,
            columns: [{
                    prop: 'hotel',
                    hide: 'false',
                    prop_child: 'name',
                    type: 'text',
                    label: 'hotel_name',
                    width: 180,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'hotel',
                    hide: 'false',
                    prop_child: 'hotelStatus',
                    type: 'text',
                    label: 'hotel_status',
                    width: 150,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'hotel',
                    hide: 'false',
                    prop_child: 'address',
                    type: 'text',
                    label: 'address',
                    width: 250,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'hotel',
                    hide: 'false',
                    child_array_prop: ['averageMark', 'averageMarkClean', 'averageMarkFacility', 'averageMarkService'],
                    type: 'prop_child_multi_text',
                    label: 'average_rating',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'hotel',
                    hide: 'false',
                    prop_child: 'totalReview',
                    type: 'text',
                    label: 'number_of_review',
                    width: 200,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'numOfLike',
                    hide: 'false',
                    type: 'text',
                    label: 'num_of_review_like',
                    width: 180,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'hotel',
                    hide: 'false',
                    prop_child: 'lastComment',
                    type: 'text',
                    label: 'last_review',
                    width: 180,
                    sortable: true,
                    formatter: this.defaultFormatter,
                }

            ],
            tableName: 'review-mgt',
            tableApi: this.appConfig.api.endpoint.hotelReview,
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
        this.loading = false;
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
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelReview;
        axios.get(url)
            .then(function (response) {
                let data = response.data.data;
                self.tableData = data.hotelReviews;
                self.totalItems = data.meta.total;
                self.loading = false;
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
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelReview + `?page=${args.currentPage}&limit=10&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    localStorage.setItem("curent_page", args.currentPage);
                    let data = response.data.data;
                    self.tableData = data.hotelReviews;
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
