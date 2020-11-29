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
                            <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                            <li class="breadcrumb-item " aria-current="page"><a href="hotel-facility-mgt-create">{{$t('breadcrumb.facility-mgt')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.create')}}</li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
        <!-- End Breadcrumbbar -->
        <!-- Start Contentbar-->
        <div class="contentbar">
            <div class="card m-b-30 uers-detail-bar">
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.group_name')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.group_name')" v-model="hotelGroupSn" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.hotel_name')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.hotel_name')" v-model="name" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.holding_company')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.tax_no')" v-model="taxId" type="text"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.business_license')" v-model="businessLicense" type="text"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.company_name')" v-model="companyName" type="text"></el-input>
                    </div>

                    <div class="col-md-2">
                    </div>
                    <div class="col-md-3" style="padding-top:10px">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.address')" v-model="address" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.legal_representative')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.full_name')" v-model="repName" type="text"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.position')" v-model="repPosition" type="text"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.telephone')" v-model="repTel" type="text"></el-input>
                    </div>
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-3" style="padding-top:10px">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.email')" v-model="repEmail" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.status')}}</p>
                    </div>
                    <div class="col-md-2">
                        <el-select v-model="hotelStatus" :placeholder="$t('table.hotels.create_hotel_display.waiting')">
                            <el-option value="1" :label="$t('table.hotels.create_hotel_display.waiting')"></el-option>
                            <el-option value="2" :label="$t('table.hotels.create_hotel_display.displayed')"></el-option>
                            <el-option value="3" :label="$t('table.hotels.create_hotel_display.trial')"></el-option>
                            <el-option value="4" :label="$t('table.hotels.create_hotel_display.contracted')"></el-option>
                        </el-select>
                    </div>
                    <div class="col-md-3">
                        <div class="block">
                            <el-date-picker v-model="contractDate" type="date" :placeholder="$t('table.hotels.create_hotel_display.contract_date')">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="block">
                            <el-date-picker v-model="endContractDate" type="date" :placeholder="$t('table.hotels.create_hotel_display.end_contract_date')">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2"></div>
                    <div class="col-md-2">
                        <el-input type="text" v-model="number1"></el-input>
                    </div><span style="margin-top:10px">/</span>
                    <div class="col-md-2">
                        <el-input type="text" v-model="number2"></el-input>
                    </div>
                    <span style="margin-top:10px"><strong>/ G2J</strong></span>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.bank_information')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.account_no')" v-model="bankAccount" type="text"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.bank_name')" v-model="bankName" type="text"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.branch_name')" v-model="bankBranch" type="text"></el-input>
                    </div>
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-3" style="padding-top:10px">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.beneficiary')" v-model="beneficiary" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.biz_in_charge')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-select v-model="bizInCharge.fullName" placeholder="-------">
                            <el-option value="24">Sales Amdin</el-option>
                            <el-option value="69">Đặng Ngọc Tuấn</el-option>
                            <el-option value="118">Nguyễn Toàn Thắng</el-option>
                            <el-option value="171">Chenh Henh Phat</el-option>
                            <el-option value="405">Nguyễn Đặng Thùy Linh</el-option>
                            <el-option value="598">Bạch Thu Giang</el-option>
                            <el-option value="634">Mai Thị Vui</el-option>
                            <el-option value="856">Phạm Nhật Thanh</el-option>
                            <el-option value="988">Đặng Ánh Ngọc</el-option>
                            <el-option value="1135">Đỗ Thị Thu Trang</el-option>
                            <el-option value="2167">Hoàng Nhật Quang</el-option>
                            <el-option value="2681">Khanh Che</el-option>
                            <el-option value="2682">Thanh Pham</el-option>
                            <el-option value="2848">Nguyễn Hoàng Sơn Nguyên</el-option>
                            <el-option value="2910">Phạm Phát Lợi</el-option>
                            <el-option value="2919">Nguyễn Thị Như Ngọc</el-option>
                            <el-option value="3232">Nguyễn Ngọc Vân</el-option>
                            <el-option value="291">Vincent Koo</el-option>
                            <el-option value="562">Đỗ Sỹ Tùng</el-option>
                            <el-option value="563">Phạm Thanh Xuân</el-option>
                            <el-option value="182">Kiều Anh</el-option>
                            <el-option value="614">Bùi Nam Vinh</el-option>
                            <el-option value="895">Đinh Lê Như Quỳnh</el-option>
                            <el-option value="907">Nguyen Tran Thanh Nha</el-option>
                            <el-option value="1168">Bạch Diệu Hương</el-option>
                            <el-option value="1414">Nguyễn Huỳnh Nhật Phú</el-option>
                            <el-option value="1453">Bùi Ngọc Minh Tâm</el-option>
                        </el-select>

                    </div>
                    <div class="col-md-5">
                        <p>{{ $t('table.hotels.create_hotel_display.manage_hotel_after_contracting')}}</p>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.sale_in_charge')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-select v-model="saleInCharge.fullName" placeholder="-------">
                            <el-option value="24">Sales Amdin</el-option>
                            <el-option value="69">Đặng Ngọc Tuấn</el-option>
                            <el-option value="118">Nguyễn Toàn Thắng</el-option>
                            <el-option value="171">Chenh Henh Phat</el-option>
                            <el-option value="405">Nguyễn Đặng Thùy Linh</el-option>
                            <el-option value="598">Bạch Thu Giang</el-option>
                            <el-option value="634">Mai Thị Vui</el-option>
                            <el-option value="856">Phạm Nhật Thanh</el-option>
                            <el-option value="988">Đặng Ánh Ngọc</el-option>
                            <el-option value="1135">Đỗ Thị Thu Trang</el-option>
                            <el-option value="2167">Hoàng Nhật Quang</el-option>
                            <el-option value="2681">Khanh Che</el-option>
                            <el-option value="2682">Thanh Pham</el-option>
                            <el-option value="2848">Nguyễn Hoàng Sơn Nguyên</el-option>
                            <el-option value="2910">Phạm Phát Lợi</el-option>
                            <el-option value="2919">Nguyễn Thị Như Ngọc</el-option>
                            <el-option value="3232">Nguyễn Ngọc Vân</el-option>
                            <el-option value="291">Vincent Koo</el-option>
                            <el-option value="562">Đỗ Sỹ Tùng</el-option>
                            <el-option value="563">Phạm Thanh Xuân</el-option>
                            <el-option value="182">Kiều Anh</el-option>
                            <el-option value="614">Bùi Nam Vinh</el-option>
                            <el-option value="895">Đinh Lê Như Quỳnh</el-option>
                            <el-option value="907">Nguyen Tran Thanh Nha</el-option>
                            <el-option value="1168">Bạch Diệu Hương</el-option>
                            <el-option value="1414">Nguyễn Huỳnh Nhật Phú</el-option>
                            <el-option value="1453">Bùi Ngọc Minh Tâm</el-option>
                        </el-select>
                    </div>
                    <div class="col-md-5">
                        <p>{{ $t('table.hotels.create_hotel_display.contracting_new_hotel')}}</p>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.property_management_system')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-radio v-model="radio" label="1">{{ $t('table.hotels.create_hotel_display.yes_i_using')}}</el-radio>
                        <div class="row col-md-12" v-if="radio == 1">
                       
                                <div class="col-md-3">
                                    <el-checkbox v-model="checked1" :label="$t('table.hotels.create_hotel_display.ez_cloud')"></el-checkbox>
                                </div>
                                <div class="col-md-3">
                                    <el-checkbox v-model="checked2" :label="$t('table.hotels.create_hotel_display.bhotel_easy')"></el-checkbox>
                                </div>
                                <div class="col-md-3">
                                    <el-checkbox v-model="checked3" :label="$t('table.hotels.create_hotel_display.hbsoft_hotel')"></el-checkbox>
                                </div>
                                <div class="col-md-3">
                                    <el-checkbox v-model="checked4" :label="$t('table.hotels.create_hotel_display.ohotel')"></el-checkbox>
                                </div>
                                <div class="col-md-3">
                                    <el-checkbox v-model="checked5" :label="$t('table.hotels.create_hotel_display.sky_hotel')"></el-checkbox>
                                </div>
                                <div class="col-md-3">
                                    <el-checkbox v-model="checked6" :label="$t('table.hotels.create_hotel_display.intellio')"></el-checkbox>
                                </div>
                                <div class="col-md-3">
                                    <el-checkbox v-model="checked7" :label="$t('table.hotels.create_hotel_display.fotel')"></el-checkbox>
                                </div>
                                <div class="col-md-3">
                                    <el-input type="text"></el-input>
                                </div>
                           
                        </div>
                        <div class="row col-md-12" v-if="radio == 2">
                            <div class="col-md-3">
                                <el-checkbox v-model="checked1" :label="$t('table.hotels.create_hotel_display.ez_cloud')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked2" :label="$t('table.hotels.create_hotel_display.bhotel_easy')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked3" :label="$t('table.hotels.create_hotel_display.hbsoft_hotel')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked4" :label="$t('table.hotels.create_hotel_display.ohotel')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked5" :label="$t('table.hotels.create_hotel_display.sky_hotel')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked6" :label="$t('table.hotels.create_hotel_display.intellio')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked7" :label="$t('table.hotels.create_hotel_display.fotel')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-input type="text" disabled></el-input>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-9">
                        <el-radio v-model="radio" label="2">{{ $t('table.hotels.create_hotel_display.no_i_just_use')}}</el-radio>
                        <div class="row col-md-12" v-if="radio == 2">
                            <div class="col-md-3">
                                <el-checkbox v-model="checked9" :label="$t('table.hotels.create_hotel_display.excel')"></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked10" :label="$t('table.hotels.create_hotel_display.notebook')"></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked11" :label="$t('table.hotels.create_hotel_display.google_sheet')"></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-input type="text"></el-input>
                            </div>
                        </div>
                        <div class="row col-md-12" v-if="radio == 1">
                            <div class="col-md-3">
                                <el-checkbox v-model="checked9" :label="$t('table.hotels.create_hotel_display.excel')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked10" :label="$t('table.hotels.create_hotel_display.notebook')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-checkbox v-model="checked11" :label="$t('table.hotels.create_hotel_display.google_sheet')" disabled></el-checkbox>
                            </div>
                            <div class="col-md-3">
                                <el-input type="text" disabled></el-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.hotel_type')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-select v-model="type" placeholder="-------">
                            <el-option value="1">{{ $t('table.hotels.create_hotel_display.couples')}}</el-option>
                            <el-option value="2">{{ $t('table.hotels.create_hotel_display.travel')}}</el-option>
                            <el-option value="3">{{ $t('table.hotels.create_hotel_display.couples_and_travel')}}</el-option>

                        </el-select>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.location')}}</p>
                    </div>
                    <div class="col-md-9">
                        <Maps />
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.lat_long')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.long')" type="text"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.lat')" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.address')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.address')" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.province_district')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-select v-model="value" :placeholder="$t('table.hotels.create_hotel_display.province_district')">
                            <el-option v-for="item in dataDistrict" :key="item.sn" :label="item.name" :value="item.sn">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="col-md-3">
                        <el-select v-model="value" :placeholder="$t('table.hotels.create_hotel_display.province_district')">
                            <el-option v-for="item in dataDistrict" :key="item.sn" :label="item.name" :value="item.sn">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.phone')}}</p>
                    </div>
                    <div class="col-md-1">
                        <el-input type="text"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.phone')" v-model="phone" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.vn_description')}}</p>
                    </div>
                    <div class="col-md-9">
                        <ckeditor :height="300" :editor="editor" v-model="Description" :config="editorConfig">
                        </ckeditor>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.en_description')}}</p>
                    </div>
                    <div class="col-md-9">
                        <ckeditor :height="300" :editor="editor" v-model="enDescription" :config="editorConfig">
                        </ckeditor>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.commission')}}</p>
                    </div>
                    <div class="col-md-4">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.commission')" v-model="commission" type="text"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.hash_tag')}}</p>
                    </div>
                    <div class="col-md-4">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.hash_tag')" v-model="hashtag" type="text"></el-input>
                    </div>
                    <div class="col-md-1">
                        <el-button type="success">Add</el-button>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_hotel_display.facilities')}}</p>
                    </div>
                    <div class="col-md-4">
                        <el-input :placeholder="$t('table.hotels.create_hotel_display.facilities')" v-model="facilities" type="text"></el-input>
                    </div>
                    <div class="col-md-1">
                        <el-button type="success">Add</el-button>
                    </div>
                </div>

                <div class="row input-padding">
                    <div class="col-md-2  style-center-text">
                        <p>{{ $t('table.hotels.create_hotel_display.home_image')}} </p>
                    </div>
                    <div class="col-md-9">
                        <div class="col-md-4 no-padd" style="float:left">
                            <div id="preview">
                                <img v-if="imageUrl" :src="imageUrl" />
                            </div>
                        </div>
                        <div class="col-md-4  style-center-text">
                            <input type="file" accept="image/jpeg" @change="onChange">
                        </div>
                    </div>
                </div>
                <div v-for="(i,index) in 11" :key="index">
                    <div class="row input-padding">
                        <div class="col-md-2  style-center-text">
                            <p>{{ $t('table.hotels.create_hotel_display.image')}} {{ index + 1 }}</p>
                        </div>
                        <div class="col-md-9">
                            <div class="col-md-4 no-padd" style="float:left">
                                <div id="preview">
                                    <img v-if="imageUrl" :src="imageUrl" />
                                </div>
                            </div>
                            <div class="col-md-4  style-center-text">
                                <input type="file" accept="image/jpeg" @change="onChange">
                            </div>
                            <div class="col-md-4 style-center-text">
                                <el-checkbox v-model="checked">{{ $t('table.hotels.create_hotel_display.image360')}}</el-checkbox>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="right-content">

                            <el-button type="info" size="large" @click="$router.go(-1)">
                                {{$t('table.hotels.button.back')}}
                            </el-button>

                            <el-button type="success" size="large" @click="onCreateFacilityHotel">
                                <i class="feather icon-save mr-2" />
                                {{$t('table.hotels.button.create')}}
                            </el-button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Filterselect from "../../../../components/FilterSelect";
import Maps from '../../../../components/Maps'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    name: "CreateDisplayHotelMgt",
    components: {
        Filterselect,
        Maps
    },
    data() {
        return {
            editor: ClassicEditor,
            checked: false,
            description: '',
            Description: '<p>Content of the editor.</p>',
            enDescription: '<p>Content of the editor 12.</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            Waiting: [{
                value: 'Displayed',
                label: 'Displayed'
            }, {
                value: 'Trial',
                label: 'Trial'
            }, {
                value: 'Contracted',
                label: 'Contracted'
            }],
            number1: 2031,
            number2: 2020,
            image: null,
            imageUrl: null,
            end_contract_date: '',
            name: '',
            radio: '1',
            nameEn: '',
            hotels: [],
            status_day: '',
            scope: [{
                    name: "Public",
                    value: 0
                },
                {
                    name: "Private",
                    value: 1
                }
            ],
            imageUrl: [],
            address: '',
            totalView: '',
            totalReview: '',
            taxId: '',
            repPosition: '',
            repName: '',
            repEmail: '',
            phone: '',
            provinceSn: '',
            name: '',
            longitude: '',
            latitude: '',
            imagePath: '',
            hotelStatus: '',
            hotelGroupSn: '',
            createTime: '',
            createStaffSn: '',
            commission: '',
            businessLicense: '',
            ez_cloud: '',
            bhotel_easy: '',
            hbsoft_hotel: '',
            ohotel: '',
            sky_hotel: '',
            intellio: '',
            fotel: '',
            excel: '',
            hashtag: '',
            notebook: '',
            google_sheet: '',
            bankName: '',
            bankBranch: '',
            bankAccount: '',
            contractDate: null,
            endContractDate: null,
            repTel: '',
            beneficiary: '',
            companyName: '',
            facilities: '',
            bizInCharge: {
                fullName: ''
            },
            type: '',
            saleInCharge: {
                fullName: ''
            },
            dataDistrict: [],
        }
    },
    async onCreateHotels() {
        let bln
        let companyAddress
        let companyEmail
        let companyName
        let companyTel
        let name
        let ownerEmail
        let ownerName
        let ownerTel

        let self = this;
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
        }
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelGroups;
        axios.post(url, {
                bln: this.bln,
                companyAddress: this.companyAddress,
                companyEmail: this.companyEmail,
                companyName: this.companyName,
                companyTel: this.companyTel,
                name: this.name,
                ownerEmail: this.ownerEmail,
                ownerName: this.ownerName,
                ownerTel: this.ownerTel,

            })
            .then(function (response) {
                console.log('response submit form', response)
            })
            .catch(error => {
                self.loading = false;
                try {
                    const data = error.response.data;
                    this.$awn.alert(data.message);
                } catch (err) {
                    this.$awn.alert('123\'t connect to server.<br/>Please try again later.');
                }
            })
    },
    created() {
        this.loadProvinces()
    },
    methods: {
        loadProvinces() {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }

            let url = this.appConfig.api.url + this.appConfig.api.endpoint.provinces;
            console.log('url loadDistrict ', url)
            axios.get(url)
                .then(function (response) {
                    console.log('response', response)
                    self.loading = false;
                    let data = response.data.data;
                    console.log('data', response.data)
                    self.dataDistrict = data.provinces;
                    self.totalItems = data.meta.total;
                    console.log('self.tableData', self.tableData)
                    console.log('self.totalItems', self.totalItems)
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
        loadDistrict() {

        },
        onChange(e) {
            const file = e.target.files[0]
            this.image = file
            this.imageUrl = URL.createObjectURL(file)
        },
        async onCreateFacilityHotel() {
            let imageUrl
            let name
            let nameEn
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            console.log('this.data post', self.imageUrl, self.name, self.nameEn)
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelMgt;
            axios.post(url, {
                    imageUrl: self.hotels,
                    name: self.name,
                    nameEn: self.nameEn,
                })
                .then(function (response) {
                    console.log('response submit form', response)
                })
                .catch(error => {
                    self.loading = false;
                    try {
                        const data = error.response.data;
                        this.$awn.alert(data.message);
                    } catch (err) {
                        this.$awn.alert('123\'t connect to server.<br/>Please try again later.');
                    }
                })
        },
        reloadTableData(keyword) {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelMgt +
                `?keyword=${keyword ? keyword : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    let data = response.data.data;
                    self.hotels = [];
                    data.hotels.map(function (currentValue, index, array) {
                        self.hotels.push({
                            name: currentValue.nickName,
                            value: index
                        });
                    });
                })
                .catch(error => {
                    self.loading = false;
                    try {
                        const data = error.response.data;
                        this.$awn.alert(data.message);
                    } catch (err) {
                        this.$awn.alert('111111111Can\'t connect to server.<br/>Please try again later.');
                    }
                })
        },
        formatDate(date) {
            let dateObj = new Date(date);
            let month = dateObj.getMonth();
            let day = String(dateObj.getDate()).padStart(2, '0');
            let year = dateObj.getFullYear();
            let hour = dateObj.getHours();
            let min = dateObj.getMinutes();
            if (month < 10) {
                month = '0' + month;
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (min < 10) {
                min = '0' + min;
            }
            return year + '-' + month + '-' + day + ' ' + hour + ':' + min
        },
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        }
    }
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

.style-center-text {
    float: left;
    top: 30px;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.no-padd {
    padding-left: 0;
    padding-right: 0;
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
