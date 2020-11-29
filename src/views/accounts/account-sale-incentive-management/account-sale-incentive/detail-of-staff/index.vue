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
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.acc_lf_side.detail_of_staff')}}</li>
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
                                    :totalRow="true"
                                    :summary="true"
                                    :dateSelect="incentiveDate"
                                    :searchAble="true" 
                                    :incentive="false" 
                                    :action="false" 
                                    :exportFile="true"
                                    :selectCategory="selectCategory"
                                    :categorySelected="categorySelected"    
                                    :keywordSelected="keywordSelected"
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
                staffSn:       this.$route.query.staffSn,
                columns: [
                    {
                        prop: 'category',
                        hide:  'false',
                        type: 'text',
                        href: 'detail-of-staff',
                        label: 'label_header_detail_of_staff.category',
                        width: 250,
                        formatter: this.defaultFormatter 
                    },
                    {
                        prop: 'province',
                        prop_child: 'name',
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.province',
                        width: 160,
                        formatter: this.defaultFormatter 
                    },
                    {   prop: 'district', 
                        prop_child: 'name',
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.district', 
                        width: 160, 
                        formatter: this.defaultFormatter 
                    },
                    {   prop: 'name', 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.hotel_name', 
                        width: 200, 
                        formatter: this.defaultFormatter 
                    },
                    {   prop: 'verifiedDate', 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.verified_date', 
                        width: 220, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop: 'contractDate', 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.contract_date', 
                        width: 130, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop: `commission`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.contract_per', 
                        width: 120, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop: `program`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.program', 
                        width: 160, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop: `startDatePromotion`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.start_date_promotion', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop: `endDatePromotion`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.end_date_promotion', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop: `startDateStamp`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.start_date_stamp', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop: `newContractedType`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.new_contract_type', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop: `numOfCheckInBookings`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.number_of_checkin_bookings', 
                        width: 220, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop: `commissionOfCheckInAmount`, 
                        hide:  'false',
                        type: 'text',
                        label: 'label_header_detail_of_staff.commission_of_checkin_amount', 
                        width: 240, 
                        formatter: this.defaultFormatter
                    }
                    ,{  
                        prop: `incentive`, 
                        hide:  'false',
                        type: 'text',
                        total: 'true',
                        label: 'label_header_detail_of_staff.incentive', 
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
                tableData: [{
                    "sn": null,
                    "staff": {
                        "sn": "",
                        "fullName": ' '
                    },
                    "province": {
                        "sn": " ",
                        "name": " "
                    },
                    "district": {
                        "sn": " ",
                        "name": " "
                    },
                }],
                keywordSelected: this.$route.query.staffName,
                totalItems: 0,
                totalAmount: false,
                arrKeyword:['staff','category'],
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
                categorySelected: 0
            }
        },
        async created(){
            this.loading = false;
            let self = this
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
        },
        async mounted() {
            let self = this;
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.saleIncentives+'?staffSn='+this.staffSn+'&incentiveDate='+this.incentiveDate+'&category=0';
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
                const self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                }
                const url = `${this.appConfig.api.url}${this.appConfig.api.endpoint.saleIncentives}`;
                let finalUrl;
                if(!args.keyword){
                    finalUrl = url+`?staffSn=${self.staffSn}&incentiveDate=${self.formatDate(args.dateFrom ? args.dateFrom : self.incentiveDate ,false)}&category=${args.status ? args.status : '0'}`;
                }else{
                    finalUrl = url+`?keyword=${args.keyword}&incentiveDate=${this.formatDate(args.dateFrom ? args.dateFrom : self.incentiveDate,false)}&category=${args.status ? args.status : '0'}`;
                }
                axios.get(finalUrl)
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
                        const data = error.response.data;
                        self.$message({
                            type: 'error',
                            message: data.message
                        });
                    })
            },
            clearDataAndEmptyFirstRow(){
                this.tableData  = [{
                    "sn": null,
                    "staff": {
                        "sn": "",
                        "fullName": ' '
                    },
                    "province": {
                        "sn": " ",
                        "name": " "
                    },
                    "district": {
                        "sn": " ",
                        "name": " "
                    },
                }];
            }
        }
    }
</script>s  