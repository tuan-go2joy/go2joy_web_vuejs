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
                                <li class="breadcrumb-item " aria-current="page"><a href="account-sale-incentive-management">{{$t('breadcrumb.acc_lf_side.account_sale_incentive_history')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.acc_lf_side.detail')}}</li>
                            </ol>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <div class="widgetbar">
                            <button class="btn btn-info-rgba" @click="onConfirm">{{$t('table.account_sale.label_header.label_header_detail.header_button.confirm')}}</button>
                            <button class="btn btn-success-rgba" @click="onSave">{{$t('table.account_sale.label_header.label_header_detail.header_button.save')}}</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Breadcrumbbar -->
            <div class="contentbar" v-if="tableData">
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
                                    :totalRow="true"
                                    :totalAmount="totalAmount"
                                    :dateSelect="incentiveDate"
                                    :summary="true"
                                    :searchAble="false" 
                                    :incentive="false" 
                                    :action="false" 
                                    :exportFile="true" 
                                    @onDerect="onDerect"
                                    @reloadTableData="reloadTableData">
                                </datatable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contentbar" v-else>
                <div class="card m-b-30" style="text-align: center;padding: 20px;">
                    <p>No data</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Datatable from "../../../../components/Datatable";
    export default {
        name: "AccountSaleIncentiveHistoryManagement",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                incentiveDate: this.$route.query.incentiveDate ? this.$route.query.incentiveDate  :  this.formatDate(new Date(),false),
                sn:            this.$route.query.sn,
                columns: [
                    {
                        prop:       'staff',
                        hide:       'false',
                        prop_child: 'fullName',
                        sn:         'staff',
                        child_sn:   ['sn','fullName'],
                        type:       'link3',
                        href:       'detail-of-staff',
                        label:      'label_header_detail.staff_name',
                        width:      290,
                        formatter: this.defaultFormatter 
                    },
                    {
                        prop:  'incentive',
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail.incentive',
                        width:  290,
                        formatter: this.defaultFormatter 
                    },
                    {   prop:  'pit', 
                        hide:  'false',
                        type:  'text',
                        label: 'label_header_detail.pit', 
                        width: 160, 
                        formatter: this.defaultFormatter 
                    },
                    {   prop:  'income', 
                        hide:  'false',
                        sn:    'income', 
                        type:  'text',
                        total: 'true',
                        href:  'account-sale-incentive-detail',
                        label: 'label_header_detail.income', 
                        width: 160, 
                        formatter: this.defaultFormatter 
                    },
                    {   prop:  'newContract', 
                        hide:  'false',
                        sn:    'newContract',
                        type:  'text',
                        total: 'true',
                        href:  'account-sale-incentive-detail',
                        label: 'label_header_detail.new_contract', 
                        width: 220, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop:  'stamp', 
                        hide:  'false',
                        sn:    'stamp',
                        type:  'text',
                        total: 'true',
                        href:  'account-sale-incentive-detail',
                        label: 'label_header_detail.stamp', 
                        width: 130, 
                        formatter: this.defaultFormatter 
                    },
                    {  
                        prop:  'hotelOwnPromotion', 
                        hide:  'false',
                        sn:    'hotelOwnPromotion',
                        type:  'text',
                        total: 'true',
                        href:  'account-sale-incentive-detail',
                        label: 'label_header_detail.hotel_promotion', 
                        width:  260, 
                        formatter: this.defaultFormatter
                    },
                    {  
                        prop:  'coPromotion', 
                        hide:  'false',
                        sn:    'coPromotion',
                        type:  'text',
                        total: 'true',
                        href:  'account-sale-incentive-detail',
                        label: 'label_header_detail.co_promotion', 
                        width:  160, 
                        formatter: this.defaultFormatter
                    },
                    {  
                        prop:  'newHotelCheckInAmount', 
                        hide:  'false',
                        sn:    'newHotelCheckInAmount',
                        type:  'text',
                        total: 'true',
                        href:  'account-sale-incentive-detail',
                        label: 'label_header_detail.new_hotel_checkin_amount', 
                        width: 200, 
                        formatter: this.defaultFormatter
                    }
                ],
                tableLabel: 'account_sale',
                // create empty first row
                tableData: [{ 
                    "sn": null,
                    "staff": {
                        "sn": "",
                        "fullName": ' '
                    },
                }],
                totalAmount: ['incentive','category'],
                totalItems: 0,
                arrKeyword:['staff','category'],
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
            }
        },
        async created(){
            this.loading = false;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            };
        },
        async mounted() {
            let self = this;
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.saleIncentiveHistoryDetails+'?incentiveDate='+this.incentiveDate;
            axios.get(url)
                .then(function (response) {
                    let data = response.data.data;
                    data.saleIncentiveHistoryDetails.map(function(currentValue, index, array) {
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
                            type:    'error',
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
            onConfirm(){
                let self = this;
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.saleIncentiveHistories+'/'+this.sn+'?_method=PATCH';
                let saleIncentiveHistory=[
                    {
                        op:   'replace',
                        path: '/status',
                        value: '1'
                    }
                ]
                let formData = new FormData();
                saleIncentiveHistory.forEach(function(item,index){
                    formData.append(`saleIncentiveHistory[${index}][op]`,item.op);
                    formData.append(`saleIncentiveHistory[${index}][path]`,item.path);
                    formData.append(`saleIncentiveHistory[${index}][value]`,item.value);
                })
                axios.post(url,formData).then(function (response) {
                        let data = response.data.data;
                        self.$message({
                            type:    'success',
                            message: `${self.$t("table.account_sale.label_header.label_header_detail_of_account_sale_incentive.message.comfirm.success")}`
                        });
                    })
                    .catch(error => {
                        self.loading = false;
                         try {
                            const data = error.response.data;
                            self.$message({
                                type:    'error',
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
            onSave(){
                let self = this;
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.saleIncentiveHistoryDetails;
                let formData = new FormData();
                formData.append('incentiveDate', this.formatDate(this.incentiveDate,false));
                axios.post(url,formData).then(function (response) {
                        let data = response.data.data;
                        self.$message({
                            type:    'success',
                            message: `${self.$t("table.account_sale.label_header.label_header_detail_of_account_sale_incentive.message.save.success")}`
                        });
                    })
                    .catch(error => {
                        self.loading = false;
                        try {
                            const data = error.response.data;
                            self.$message({
                                type:    'error',
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
            onDerect(href,query){
                if(Number.isInteger(query[0])){
                    this.$router.push(`/hotel-management/${href}?staffSn=${query[0]}&incentiveDate=${this.incentiveDate}&category=0&staffName=${query[1]}`);
                }else{
                    this.$router.push(`/hotel-management/${href}?incentiveDate=${this.incentiveDate}&category=${query}`);
                }
            },
            reloadTableData(args) {
                let self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                }
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.saleIncentiveHistoryDetails +
                    `?keyword=${args.keyword}&incentiveDate=${this.formatDate(args.dateFrom ? args.dateFrom : self.incentiveDate,false)}&category=0`;
                axios.get(url)
                    .then(function (response) {
                        self.loading    = false;
                        localStorage.setItem("curent_page", args.currentPage);
                        let data        = response.data.data;
                        self.clearDataAndEmptyFirstRow();
                        self.incentiveDate = args.dateFrom;
                        data.saleIncentiveHistoryDetails.map(function(currentValue, index, array) {
                            self.tableData.push(currentValue);
                        });
                        self.totalItems = data.meta.total;
                        self.pageSize   = args.pageSize;
                    })
                    .catch(error => {
                        self.loading = false;
                        self.$message({
                            type: 'success',
                            message: error
                        });
                    })
            },
            clearDataAndEmptyFirstRow(){
                this.tableData  = [
                {
                    "sn": null,
                    "staff": {
                        "sn": "",
                        "fullName": ' '
                    }
                }];
            }

        }
    }
</script>s