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
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.product-type-mgt')}}</li>
                        </ol>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="widgetbar">
                        <button class="btn btn-primary-rgba" ><i class="feather icon-plus mr-2"></i>Add</button>
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
                                :actions="actions" 
                                :actionsWidth="actionsWidth" 
                                :searchAble="false" 
                                :exportFile="false" 
                                @onDerect="onDerect"
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
    name: "Banner",
    components: {
        Datatable,
    },
    data() {
        return {
            loading: true,
            columns: [
                {
                    prop:  'title',
                    hide:  'false',
                    label: 'title',
                    href:  'detail-banner',
                    sn:    'sn',
                    type:  'link',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'imagePath',
                    hide: 'false',
                    type: 'img',
                    label: 'image',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'targetName',
                    hide: 'false',
                    label: 'linked_name',
                    type: 'link',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'totalClicks',
                    hide: 'false',
                    label: 'total_of_clicks',
                    type: 'text',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'targetType',
                    hide: 'false',
                    label: 'linked_type',
                    type: 'text',
                    width: 220,
                    sortable: true,
                    formatter: (value) => {
                        switch (value) {
                            case 1:
                                return 'PROMOTION'
                            case 2:
                                return 'HOTEL'
                            case 3:
                                return 'NOTICE'
                            case 4:
                                return 'LINK'
                            case 5:
                                return 'AREA'
                            case 6:
                                return 'MILEAGE_POINT'
                            case 7:
                                return 'COUPON'
                            case 8:
                                return 'DIRECT_DISCOUNT'
                            case 9:
                                return 'INVITE_FRIEND'
                            case 10:
                                return 'PROMOTION_GROUP'
                            case 12:
                                return 'AMENITY_PACK_HOTEL'

                        }
                    }
                },
                {
                    prop: 'display',
                    hide: 'false',
                    type: 'text',
                    label: 'status',
                    width: 160,
                    sortable: true,
                    formatter: (value) => {
                        return value === 1 ? `${this.$t("table.banner.status.active")}` : value === 2 ? `${this.$t("table.banner.status.disable")}` : 'N/A'
                    }
                },
            ],
            tableLabel: 'banner',
            tableData: [],
            totalItems: 0,
            pageSizes: [10, 15, 20, 30, 50],
            pageSize: 10,
            mobileDevices: {},
            static: {},
            actionsEdit: 1,
            actionsWidth: 250,
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
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.banners + '?status=1&limit=' + `${this.pageSize}`;
        axios.get(url)
            .then(function (response) {
                self.loading = false;
                console.log('res',response)
                let data = response.data.data;
                self.tableData = data.banner;
                self.totalItems = data.meta.total;
            })
            .catch(error => {
                self.loading = false;
                try {
                    const data = error.response.data;
                    self.$message({
                        type:   'error',
                        message: error.response.data
                    });
                } catch (err) {
                    self.$message({
                        type:   'error',
                        message: 'Can\'t connect to server.<br/>Please try again later.'
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
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.banners +
                `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    localStorage.setItem("curent_page", args.currentPage);
                    let data = response.data.data;
                    self.tableData = data.banner;
                    self.totalItems = data.meta.total;
                    self.pageSize = args.pageSize;
                })
                .catch(error => {
                    self.loading = false;
                    try {
                        const data = error.response.data;
                        self.$message({
                            type:   'error',
                            message: error.response.data
                        });
                    } catch (err) {
                        self.$message({
                        type:   'error',
                        message: 'Can\'t connect to server.<br/>Please try again later.'
                    });
                    }
                })
        },
        onDerect(href,query){
            this.$router.push(`/hotel-management/${href}?sn=${query}`);
        }
    },
}
</script>
