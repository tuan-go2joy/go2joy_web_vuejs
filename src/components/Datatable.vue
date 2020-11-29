<template>
<div class="datatable">
    <el-form :inline="true" :model="filtering" class="demo-form-inline" v-if="searchAble || searchAble==false">
        <el-form-item>
            <el-input v-model="filtering.keyword" :placeholder="$t('table.header.keyword')" clearable></el-input>
        </el-form-item>
        <el-form-item  v-if="searchAble == true">
            <FilterSelect 
            class="filter-trip" 
            :placeholder="$t('table.header.placeholder')" 
            :data="selectCategory" 
            :select="categorySelected" 
            @input="filterDataSelect" />
        </el-form-item>
        <el-form-item v-if="searchRating == true">
            <multiselect v-model="valueSelectCheck" :options="optionsSelectCheck" :multiple="true" :placeholder="$t('breadcrumb.marketing.create_pupup.none_selected')" label="name" track-by="name" :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }">
                    <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} {{ $t('breadcrumb.marketing.create_pupup.choose')}}</span>
                </template>
            </multiselect>
            <el-select v-model="filtering.searchRating" :placeholder="$t('table.searchRating.rating_from_4_to_5')">
                <el-option value="1" :label="$t('table.searchRating.rating_from_4_to_5')"></el-option>
                <el-option value="2" :label="$t('table.searchRating.rating_from_3_to_less_than_4')"></el-option>
                <el-option value="3" :label="$t('table.searchRating.rating_from_2_to_less_than_3')"></el-option>
                <el-option value="4" :label="$t('table.searchRating.rating_from_1_to_less_than_2')"></el-option>
                <el-option value="5" :label="$t('table.searchRating.rating_under_1')"></el-option>

            </el-select>
        </el-form-item>
        <el-form-item v-if="searchHotel == true">
            <el-select v-model="filtering.searchHotel" :placeholder="$t('table.searchHotel.newest_to_oldest')">
                <el-option value="1" :label="$t('table.searchHotel.newest_to_oldest')"></el-option>
                <el-option value="2" :label="$t('table.searchHotel.oldest_to_newest')"></el-option>
                <el-option value="3" :label="$t('table.searchHotel.hotel_name_a_z')"></el-option>
                <el-option value="4" :label="$t('table.searchHotel.hotel_name_z_a')"></el-option>
                <el-option value="5" :label="$t('table.searchHotel.hightest_to_lowest_rating')"></el-option>
                <el-option value="6" :label="$t('table.searchHotel.lowest_to_highest_rating')"></el-option>
                <el-option value="7" :label="$t('table.searchHotel.most_to_least_review')"></el-option>
                <el-option value="8" :label="$t('table.searchHotel.least_to_most_review')"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item v-if="searchProvince == true">
            <multiselect v-model="valueSelectCheck" :options="optionsSelectCheck" :multiple="true" :placeholder="$t('breadcrumb.marketing.create_pupup.none_selected')" label="name" track-by="name" :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} {{ $t('breadcrumb.marketing.create_pupup.choose')}}</span></template>
            </multiselect>
        </el-form-item>
        <el-form-item v-if="incentive || incentive==false">
            <el-date-picker 
                v-model="filtering.dateFrom" 
                type="datetime" 
                :placeholder="incentive == true ? $t('table.header.from') : $t('table.header.incentive')" 
                format="yyyy-MM-dd HH:mm:ss" 
                value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
        </el-form-item>
        <el-form-item v-if="incentive == true">
            <el-date-picker 
                v-model="filtering.dateTo" 
                type="datetime" 
                :placeholder="$t('table.header.to')" 
                format="yyyy-MM-dd HH:mm:ss" 
                value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker>
        </el-form-item>
        <!-- <el-form-item>
                <el-select v-model="filtering.status" placeholder="Status">
                    <el-option label="All (Status)" value="-1"></el-option>
                    <el-option label="Deleted" value="0"></el-option>
                    <el-option label="Active" value="1"></el-option>
                    <el-option label="Inactive" value="2"></el-option>
                </el-select>
            </el-form-item> -->
        <el-form-item>
            <el-button icon="el-icon-search" v-on:click="search">{{$t('table.header.search')}}</el-button>
        </el-form-item>
        <el-form-item v-if="exportFile == true">
            <el-button icon="el-icon-download" v-on:click="onExportFile">{{$t('table.header.export')}}</el-button>
        </el-form-item>
    </el-form>
    <div v-loading="loading">
        <el-table :data="data" style="width: 100%" :summary-method="getSummaries" :show-summary="summary">
            <el-table-column label="#" type="index" :index="indexMethod">
            </el-table-column>
            <el-table-column 
                v-for="(column,index) in columns" 
                :key="column.total ? column.prop : column.prop+column.prop_child" 
                :prop="column.total ? column.prop : column.prop+column.prop_child" 
                :label="$t('table.'+tableLabel+'.label_header.'+column.label)" 
                :width="column.width" 
                :formatter="column.formatter" 
                :sortable="column.sortable" 
                v-if="column.hide == 'false'">
                    <template slot-scope="scope">
                        <div v-if="scope.$index === 0 && column.total">
                            <p v-if="totalAmount == false">{{ amount[index+1] }} </p>
                            <el-link v-else @click="onDirect(column.href,column.sn)">{{ amount[index+1] }} </el-link>
                        </div>
                        <div v-else>
                            <p v-if="column.type && column.type == 'text' && !column.prop_child">{{ scope.column.formatter(scope.row[column.prop]) }}</p>
                            <p v-if="column.type && column.type == 'text' && column.prop_child">{{ scope.column.formatter(scope.row[column.prop][column.prop_child]) }}</p>
                            <p v-if="column.array_prop && column.type == 'multi_text'">
                                <span v-for="(span,index) in column.array_prop" :key="index">
                                    {{ scope.row[span] == 1  ? 'IOS' : scope.row[span] == 2 ? 'Android' :  scope.column.formatter(scope.row[span])}}
                                    <span v-if="index+1 < column.array_prop.length">|</span>
                                </span>
                            </p>
                            <p v-if="column.child_array_prop && column.type == 'prop_child_multi_text'">

                                <span>
                                    {{ scope.column.formatter(scope.row.hotel.averageMark) }}
                                    <span>(</span>
                                    {{ scope.column.formatter(scope.row.hotel.averageMarkClean) }}
                                    <span>/</span>
                                    {{ scope.column.formatter(scope.row.hotel.averageMarkService) }}
                                    <span>/</span>
                                    {{ scope.column.formatter(scope.row.hotel.averageMarkFacility) }}
                                    <span>)</span>
                                </span>
                            </p>
                            <p v-if="column.child_array_prop_checkin_checkout && column.type == 'prop_child_multi_text_checkin_checkout'">
                                <span>
                                    {{ scope.column.formatter(scope.row.setting.checkinTime) }}
                                    <span> ~ </span>
                                    {{
                                        scope.column.formatter(scope.row.setting.checkoutTime)
                                    }}
                                </span>
                            </p>
                            <!-- <p v-if="column.type && column.type == 'text-region' && !column.prop_child">
                                <span v-if="scope.row == 1">
                                    {{$t('table.header.region.north')}}
                                <span>
                                <span v-if="scope.row == 2">
                                    {{$t('table.header.region.south')}}
                                <span>
                                    <span v-if="scope.row == 3">
                                    {{$t('table.header.region.middle')}}
                                <span>
                            </p> -->
                            <p v-if="column.child_array_prop_start_end_overnight && column.type == 'prop_child_multi_text_start_end_overnight'">
                                <span>
                                    {{ scope.column.formatter(scope.row.setting.overStartTime) }}

                                </span>
                            </p>
                            <p v-if="column.child_array_prop_staff_in_charge && column.type == 'prop_child_multi_text_staff_in_charge'">

                                <span>
                                    <span>BIC:</span>
                                    {{ scope.column.formatter(scope.row.saleInCharge.fullName) }}<br>
                                    <span>SIC:</span>
                                    {{
                                        scope.column.formatter(scope.row.bizInCharge.fullName)
                                    }}

                                </span>
                            </p>
                            <el-link @click="onDirect(column.href,data[scope.$index][column.sn])" v-if="column.type && column.type == 'link' && !column.prop_child && column">{{ scope.column.formatter(scope.row[column.prop]) }}
                            </el-link>
                            <el-link @click="onDirect(column.href,data[scope.$index][column.sn][column.child_sn])" v-if="column.type && column.type == 'link' && column.prop_child && column.prop">
                                {{ scope.column.formatter(scope.row[column.prop][column.prop_child]) }}
                            </el-link>
                            <el-link 
                                @click="onDirect(column.href,[data[scope.$index][column.sn][column.child_sn[0]],data[scope.$index][column.sn][column.child_sn[1]]])" 
                                v-if="column.type && column.type == 'link3' && column.prop_child && column.prop">
                                {{ scope.column.formatter(scope.row[column.prop][column.prop_child]) }}
                            </el-link>
                            <el-select v-if="column.type && column.type == 'select'" v-model="select">
                                <el-option value="111111">11111</el-option>
                                <el-option value="222222">22222</el-option>
                                <el-option value="333333">33333</el-option>
                                <el-option value="444444">44444</el-option>
                            </el-select>
                            <el-date-picker v-if="column.type && column.type == 'date'" v-model="date" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss">
                            </el-date-picker>
                            <el-checkbox v-if="column.type && column.type == 'checkbox'" v-model="checked">Option</el-checkbox>
                            <div v-if="column.type && (column.type == 'switch')">
                                <div v-if="scope.row.status == 1">
                                    <el-switch v-model="switched1" active-color="#13ce66">
                                    </el-switch>
                                </div>
                                <div v-if="scope.row.status == 0">
                                    <el-switch v-model="switched2" active-color="#13ce66">
                                    </el-switch>
                                </div>
                            </div>
                            <el-image v-if="column.type && column.type == 'img'" style="width: 200px; height: 100px" :src="`https://go2joy.s3-ap-southeast-1.amazonaws.com/`+scope.row.imagePath">
                            </el-image>
                        </div>
                    </template>
            </el-table-column>
            <el-table-column :label="$t('table.user.label_header.operations')" :width="actionsWidth" v-if="actions">
                <template slot-scope="scope">
                    <div class="action-button" v-for="(actionType,index) in actions" :key="index">
                        <el-button 
                            v-if="actionType.type == 'button'" 
                            v-bind:data="actionType" 
                            v-bind:key="actionType.lable" 
                            :type="actionType.clickActions == 'popup' ? 'danger' : actionType.clickActions == 'edit' ? 'success' : 'primary'" 
                            size="small" 
                            plain
                            @click="actionType.onClick == 'onDelete' ? onDelete(data[scope.$index].sn) : actionType.onClick == 'onEdit' ? onEdit(data[scope.$index].sn) : onDirect(actionType.href,data[scope.$index].sn)">
                                <i :class=" actionType.clickActions  == 'edit' ? 'feather icon-edit mr-2' : 'feather icon-trash-2 mr-2'"></i>
                                {{$t('table.'+tableLabel+'.button.' + actionType.lable)}}
                        </el-button>
                        <el-link 
                            v-if="actionType.type == 'link'" 
                            @click="onDirect(actionType.href,data[scope.$index][actionType.param])">
                            {{ actionType.lable }}
                        </el-link>
                        <el-link 
                            v-if="actionType.type == 'link2'" 
                            @click="onDirect(actionType.href,[data[scope.$index]['incentiveDate'],data[scope.$index]['sn']])">
                            {{ actionType.lable }}
                        </el-link>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <pagination :total="total" :pageSize="pageSize" :pageSizes="pageSizes" @changeCurrentPage="changeCurrentPage" @changePageSize="changePageSize" />
    </div>
</div>
</template>

<script>
import Pagination from "./Pagination";
// import * as moment from 'moment';
import Multiselect from 'vue-multiselect'
import FilterSelect from "./FilterSelect";
export default {
    name: "Datatable",
    components: {
        Pagination,
        FilterSelect,
    },
    props: [
        'columns',
        'data',
        'total',
        'pageSize',
        'pageSizes',
        'loading',
        'tableLabel',
        'dateSelect',
        'selectCategory',
        'keywordSelected',
        'categorySelected',
        'totalRow',
        'totalAmount',
        'actions',
        'selectCategory',
        'keywordSelected',
        // 'filterDataSelect',
        'actionsWidth',
        'searchAble',
        'searchHotel',
        'searchRating',
        'searchProvince',
        'exportFile',
        'summary',
        'incentive',
    ],
    data() {
        return {
            filtering: {
                keyword: this.keywordSelected ? this.keywordSelected : "",
                dateFrom: this.dateSelect ? this.dateSelect : "",
                dateTo: "",
                // status: '-1',
                category: '',
                pageSize: 10,
                currentPage: 1,
                searchHotel: ''
            },
            argsDB: {
                currentPage: 1,
                dateFrom: this.dateSelect ? this.dateSelect : "",
                dateTo: "",
                keyword: "",
                pageSize: 10,
                // status: "-1"
            },
            amount: [],
            select: '',
            date: "",
            checked: '',
            status: true,
            switched1: true,
            switched2: false,
            valueSelectCheck: [],
            optionsSelectCheck: [],
        }
    },
    async created() {

        let self = this;
        axios.defaults.headers = {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token'),
        }
        if(this.searchProvince == true){
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.provinces;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    let data = response.data.data;
                    self.optionsSelectCheck = data.provinces;
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
        }
    },
    methods: {
        getStatusSwift(n) {
            let result = ''
            if (n === 1) {
                return result = 'switched1'
            } else if (n === 0) {
                return result = "switched2"
            } else {
                return result = "N/A"
            }
        },
        changePageSize(args) {
            args.keyword = this.filtering.keyword;
            args.dateFrom = this.filtering.dateFrom;
            args.dateTo = this.filtering.dateTo;
            // args.status = this.filtering.status;
             args.category = data.item.value;
            this.filtering.pageSize = args.pageSize;
            this.$emit('reloadTableData', args);
        },
        changeCurrentPage(args) {
            args.keyword = this.filtering.keyword;
            args.dateFrom = this.filtering.dateFrom;
            args.dateTo = this.filtering.dateTo;
            // args.status = this.filtering.status;
            args.category = data.item.value;
            this.filtering.pageSize = args.pageSize;
            this.$emit('reloadTableData', args);
        },
        onDelete(id) {
            this.$emit('onDeleteTable', id);
        },
        onExportFile() {
            this.$emit('onExporTable', this.filtering);
        },
        onEdit(id) {
            this.$emit('onEditTable', id);
        },
        onDirect(href, query) {
            this.$emit('onDerect', href, query);
        },
        indexMethod(index) {
            if (this.totalAmount || this.totalAmount == false) {
                if (index == 0) {
                    return '';
                } else {
                    return index;
                }
            } else {
                return index + 1;
            }
        },
        filterDataSelect(data){
            this.filtering.category = data.item.value;
        },
        
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '';
                    return;
                }
                if (this.columns[index - 1] && this.columns[index - 1].total && this.columns[index - 1].total == 'true') {
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                    } else {
                        sums[index] = ' ';
                    }
                }
            });
            this.amount = sums;
            return sums;
        },
        sortChange() {

        },
        search() {
            this.$emit('getStaticAndMobileDevices', this.filtering)
            this.$emit('reloadTableData', this.filtering);
        },
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
