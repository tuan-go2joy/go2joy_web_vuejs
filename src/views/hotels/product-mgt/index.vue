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
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.product-mgt')}}</li>
                        </ol>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="widgetbar">
                        <!-- <button class="btn btn-primary-rgba" @click="onCreate"><i class="feather icon-plus mr-2"></i>Add</button> -->
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
                            <datatable :loading="loading" :columns="columns" :data="tableData" :total="totalItems" :pageSize="pageSize" :pageSizes="pageSizes" :tableLabel="tableLabel" :actionsEdit="actionsEdit" :tableName="tableName" :searchAble="true" :exportFile="false" @reloadTableData="reloadTableData">
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
                    label: 'product_name',
                    type: 'text',
                    width: 200,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'price',
                    hide: 'false',
                    type: 'text',
                    label: 'price',
                    width: 150,
                    sortable: true,
                    formatter: this.defaultFormatter
                },
                {
                    prop: 'prepare',
                    hide: 'false',
                    type: 'text',
                    label: 'prepare_before_1_day',
                    width: 230,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'lastUpdate',
                    hide: 'false',
                    type: 'text',
                    label: 'lastupdate',
                    width: 220,
                    sortable: true,
                    formatter: this.defaultFormatter,
                },
                {
                    prop: 'status',
                    hide: 'false',
                    type: 'text',
                    label: 'status_product_list',
                    width: 170,
                    sortable: true,
                    formatter: this.defaultFormatter,
                }
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
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelProducts + '?status=1&limit=' + `${this.pageSize}`;
        console.log('url', url)
        axios.get(url)
            .then(function (response) {
                // console.log('response', response)
                self.loading = false;
                let data = response.data.data;
                console.log('data', response.data)
                self.tableData = data.hotelProducts;
                console.log('self.tableData', self.tableData)
                self.totalItems = data.meta.total;
                console.log('self.totalItems 123213', self.totalItems)
                console.log('123232');
                // let result = self.tableData.reduce(function (r, a) {
                //     r[a.make] = r[a.make] || [];
                //     r[a.make].push(a);
                //     return r;
                // }, Object.create(null));
                // console.log('765765',result);
               

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
    computed: {

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
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelProducts +
                `?page=${args.currentPage}&limit=${args.pageSize}&keyword=${args.keyword}&status=1&dateFrom=${args.dateFrom ? args.dateFrom : ''}&dateTo=${args.dateTo ? args.dateTo : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    localStorage.setItem("curent_page", args.currentPage);
                    let data = response.data.data;
                    self.tableData = data.hotelProducts;
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
        groupBy(list, keyGetter) {
            const map = new Map();
            list.forEach((item) => {
                const key = keyGetter(item);
                const collection = map.get(key);
                if (!collection) {
                    map.set(key, [item]);
                } else {
                    collection.push(item);
                }
            });
            return map;
        },
        // groupByKey(array, key) {
        //     return array
        //         .reduce((hash, obj) => {
        //             if (obj[key] === undefined) return hash;
        //             return Object.assign(hash, {
        //                 [obj[key]]: (hash[obj[key]] || []).concat(obj)
        //             })
        //         }, {})
        // }
    },
}
</script>
