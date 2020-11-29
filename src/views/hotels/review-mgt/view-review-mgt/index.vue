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
                            <li class="breadcrumb-item" > <a href="review-mgt">{{$t('breadcrumb.review-mgt')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.view-review-hotel')}}</li>
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
                    <div class="col-lg-12"><p>{{$t('table.hotels.label_header.average_rating_view_review_hotel')}} {{$t('table.hotels.label_header.number_of_review_hote')}}</p></div>
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
import Datatable from "../../../../components/Datatable";

export default {
    name: "ViewReviewHotelMgt",
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
            tableName: 'view-review-mgt',
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
        console.log('url', url)
        axios.get(url)
            .then(function (response) {
                self.loading = false;
                let data = response.data.data;
                console.log('data', data)
                self.tableData = data.hotelReviews;
                console.log('self.tableData', self.tableData)
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
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelReview + `?page=${args.currentPage}&limit=10&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    localStorage.setItem("curent_page", args.currentPage);
                    let data = response.data.data;
                    self.tableData = data.hotelReviews;
                    console.log('phan trang', self.tableData)
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

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

#preview {
    width: 200px;
    height: 100px;
    border: 1px solid
}

#preview img {
    width: 100%;
    height: auto;
}
</style>
