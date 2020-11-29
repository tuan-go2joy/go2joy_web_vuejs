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
                                <li class="breadcrumb-item " aria-current="page"><a @click="$router.go(-1)">{{$t('breadcrumb.acc_lf_side.account_sale_incentive_history')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.acc_lf_side.account_sale_incentive_detail')}}</li>
                            </ol>
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
                                    :arrKeyword="arrKeyword"
                                    :tableLabel="tableLabel" 
                                    :totalAmount="totalAmount"
                                    :selectCategory="selectCategory"
                                    :totalRow="true"
                                    :dateSelect="incentiveDate"
                                    :summary="true"
                                    :searchAble="true" 
                                    :incentive="false" 
                                    :action="false" 
                                    :exportFile="true"
                                    :categorySelected="categorySelected"
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
    import Datatable from "../../../../../components/Datatable";
    export default {
        name: "AccountSaleIncentiveHistoryManagement",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                incentiveDate: this.$route.query.incentiveDate ? this.$route.query.incentiveDate  :  this.formatDate(new Date(),false),
                category:      this.$route.query.category,
                columns: [
                    {
                        prop:       'staff',
                        prop_child: 'fullName',
                        hide:       'false',
                        type:       'text',
                        href:       'detail-of-staff',
                        label:      'label_header_detail_of_account_sale_incentive.staff_name',
                        width: 250,
                        formatter: this.defaultFormatter 
                    },
                    {
                        prop:       'province',
                        hide:       'false',
                        prop_child: 'name',
                        type:       'text',
                        label:      'label_header_detail_of_account_sale_incentive.province',
                        width:      160,
                        formatter: this.defaultFormatter 
                    },
                    {   prop:       'district', 
                        hide:       'false',
                        prop_child: 'name',
                        type:       'text',
                        label:      'label_header_detail_of_account_sale_incentive.district', 
                        width:       160, 
                        formatter: this.defaultFormatter 
                    },
                    {   prop:  'name', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.hotel_name', 
                        width: 200, 
                        formatter: this.defaultFormatter 
                    },
                    {   prop:  'verifiedDate', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.verified_date', 
                        width: 220, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop:  'contractDate', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.contract_date', 
                        width: 130, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop:  'commission', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.contract_per', 
                        width: 120, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop: `program`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_account_sale_incentive.program', 
                        width: 160, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop:  'startDatePromotion', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.start_date_promotion', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop:  'endDatePromotion', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.end_date_promotion', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop:  'startDateStamp', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.start_date_stamp', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop:  'stage', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.stage', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop:  'newContractedType', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.new_contract_type', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop:  'numOfCheckInBookings', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.number_of_checkin_bookings', 
                        width: 220, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop:  'commissionOfCheckInAmount', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail_of_account_sale_incentive.commission_of_checkin_amount', 
                        width: 240, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop:  'incentive', 
                        hide:  'false',
                        type:  'text',
                        total: 'true',
                        label: 'label_header_detail_of_account_sale_incentive.incentive', 
                        width: 180, 
                        formatter: this.defaultFormatter
                    }
                ],
                selectCategory: [
                    {name: "All category",value:0},
                    {name: "New contract",value:1},
                    {name: "Stamp",value:2},
                    {name: "Hotel own promotion",value:3},
                    {name: "Co_promotion",value:4},
                    {name: "New hotel check in amount",value:5},
                ],
                tableLabel: 'account_sale',
                // create empty first row
                tableData: [{
                    "sn": null,
                    "staff": {
                        "sn": 0,
                        "fullName": " "
                    },
                    "province": {
                        "sn": 0,
                        "name": " "
                    },
                    "district": {
                        "sn": 0,
                        "name": " "
                    },
                   
                }],
                categorySelected: '',
                typeDetail: this.$route.query.category,
                totalItems: 0,
                totalAmount: false,
                arrKeyword:['staff','category'],
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
            }
        },
        async created(){
            this.loading = false;
            let self = this;
            if(this.category == 'income'){
                this.columns.splice(1, 0,  {
                    prop: 'category',
                    hide: 'false',
                    type: 'text',
                    href: 'detail-of-staff',
                    label: 'label_header_detail_of_account_sale_incentive.category',
                    width: 250,
                    formatter: (value) => {
                         switch(value){
                            case 0:
                                return 'income';
                                break;
                            case 1:
                                return 'newContract';
                                break;
                            case 2:
                                return 'stamp';
                                break;
                            case 3:
                                return 'hotelOwnPromotion';
                                break;
                            case 4:
                                return 'coPromotion'
                                break;
                            case 5:
                                return 'newHotelCheckInAmount'
                                break;
                            case ' ':
                                return ' '
                                break;
                        };
                    }
                })
            };
            switch(this.category){
                case 'income':
                    this.category = 0;
                    this.categorySelected = 0;
                    break;
                case 'newContract':
                    this.category = 1;
                    this.categorySelected = 1;
                    break;
                case 'stamp':
                    this.category = 2;
                    this.categorySelected = 2;
                    break;
                case 'hotelOwnPromotion':
                    this.category = 3;
                    this.categorySelected = 3;
                    break;
                case 'coPromotion':
                    this.category = 4;
                    this.categorySelected = 4;
                    break;
                case 'newHotelCheckInAmount':
                    this.category = 5;
                    this.categorySelected = 5;
                    break;
            };
        },
        async mounted() {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            };
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.saleIncentives+'?incentiveDate='+this.incentiveDate+'&category='+this.category;
            await axios.get(url)
                .then(function (response) {
                    let data = response.data.data;
                    data.saleIncentives.map(function(currentValue, index, array) {
                        self.tableData.push(currentValue);
                    });
                    self.totalItems = data.meta.total;
                    self.loading = false;
                })
                .catch(error => {
                    self.loading = false;
                    try {
                        const data = error.response.data;
                        self.$message({
                            type: 'error',
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
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.saleIncentives +
                    `?keyword=${args.keyword}&incentiveDate=${this.formatDate(args.dateFrom ? args.dateFrom : self.incentiveDate ,false,false)}&category=${args.category}`;
                axios.get(url)
                    .then(function (response) {
                        self.loading    = false;
                        localStorage.setItem("curent_page", args.currentPage);
                        let data        = response.data.data;
                        self.clearDataAndEmptyFirstRow();
                        data.saleIncentives.map(function(currentValue, index, array) {
                            self.tableData.push(currentValue);
                        });
                        self.totalItems = data.meta.total;
                        self.pageSize   = args.pageSize;
                    })
                    .catch(error => {
                        self.loading = false;
                        this.$message({
                            type: 'error',
                            message: error
                        });
                    })
            },
            clearDataAndEmptyFirstRow(){
                this.tableData  =  [{
                    "sn": null,
                    "staff": {
                        "sn": 0,
                        "fullName": " "
                    },
                    "province": {
                        "sn": 0,
                        "name": " "
                    },
                    "district": {
                        "sn": 0,
                        "name": " "
                    },
                
                }];
            }
        }
    }
</script>s  