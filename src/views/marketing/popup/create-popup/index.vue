<template>
<div class="dashboard">
    <div class="rightbar">
        <!-- Start Breadcrumbbar -->
        <div class="breadcrumbbar">
            <div class="row align-items-center">
                <div class="col-md-8 col-lg-8">
                    <h4 class="page-title">{{$t('breadcrumb.marketing.popup')}}</h4>
                    <div class="breadcrumb-list">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                            <li class="breadcrumb-item " aria-current="page"><a href="popup">{{$t('breadcrumb.marketing.popup')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.create')}}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumbbar -->
        <!-- Start Contentbar-->
        <div class="contentbar">
            <div class="card m-b-30 customs-detail-bar">
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('breadcrumb.marketing.create_pupup.title')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('breadcrumb.marketing.create_pupup.title')" type="text" v-model="title"></el-input>
                    </div>
                </div>

                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('breadcrumb.marketing.create_pupup.content')}}</p>
                    </div>
                    <div class="col-md-9">
                        <ckeditor :height="300" :editor="editor" v-model="content" :config="editorConfig">
                        </ckeditor>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('breadcrumb.marketing.create_pupup.link_item')}}</p>
                    </div>
                    <div class="col-md-4">
                        <el-select v-model="targetName" :placeholder="$t('breadcrumb.marketing.create_pupup.promotion_event_select')">
                            <el-option value="1" :label="$t('breadcrumb.marketing.create_pupup.promotion_event_select')"></el-option>
                            <el-option value="2" :label="$t('breadcrumb.marketing.create_pupup.notice_select')"></el-option>
                            <el-option value="3" :label="$t('breadcrumb.marketing.create_pupup.link_select')"></el-option>
                            <el-option value="4" :label="$t('breadcrumb.marketing.create_pupup.district_select')"></el-option>
                            <el-option value="1" :label="$t('breadcrumb.marketing.create_pupup.mileage_Point_select')"></el-option>
                            <el-option value="2" :label="$t('breadcrumb.marketing.create_pupup.coupon_select')"></el-option>
                            <el-option value="3" :label="$t('breadcrumb.marketing.create_pupup.direct_discount_select')"></el-option>
                            <el-option value="4" :label="$t('breadcrumb.marketing.create_pupup.amenity_pack_select')"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('breadcrumb.marketing.create_pupup.max_view_display')}}</p>
                    </div>
                    <div class="col-md-4">
                        <el-input :placeholder="$t('breadcrumb.marketing.create_pupup.max_view_display')" type="text" v-model="max_view"></el-input>
                    </div>
                    <div class="col-md-1">
                        <el-checkbox v-model="checked"></el-checkbox>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('breadcrumb.marketing.create_pupup.stop_at')}}</p>
                    </div>
                    <div class="col-md-4">
                        <el-date-picker v-model="endDate" type="date" :placeholder="$t('breadcrumb.marketing.create_pupup.stop_at')">
                        </el-date-picker>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('breadcrumb.marketing.create_pupup.display_area')}}</p>
                    </div>
                    <div class="col-md-4">
                        <multiselect v-model="targetSn" :options="optionsSelectCheck" :multiple="true" :placeholder="$t('breadcrumb.marketing.create_pupup.none_selected')" label="name" track-by="name" :preselect-first="true">
                            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} {{ $t('breadcrumb.marketing.create_pupup.choose')}}</span></template>
                        </multiselect>

                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('breadcrumb.marketing.create_pupup.image')}}</p>
                    </div>
                    <div class="col-md-10">
                        <div class="col-md-4 no-padd" style="float:left">
                            <div id="preview">
                                <img v-if="url" :src="url" />
                            </div>
                        </div>
                        <div class="col-md-4" style="float:left">
                            <input type="file" accept="image/png, image/jpeg" id="file" ref="file" v-on:change="handleFileUpload()">
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Multiselect from 'vue-multiselect'
export default {
    name: "CreatePopup",
    components: {
        Filterselect,
        ClassicEditor,
        Multiselect
    },
    data() {
        return {
            title: '',
            editor: ClassicEditor,
            checked: false,
            description: '',
           
            content: '<p></p>',
            editorConfig: {
                // The configuration of the editor.
            },
            file: '',
            url: '',
            popups: {

            },
            endDate: '',
            targetName: '',
            value: 0,
            checked: false,
            valueSelectCheck: [],
            optionsSelectCheck: [
            ],
           
        }
    },
    async created() {
        let self = this;
        axios.defaults.headers = {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token'),
        }
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.provinces;
        console.log('url loadDistrict ', url)
        axios.get(url)
            .then(function (response) {
                console.log('response', response)
                self.loading = false;
                let data = response.data.data;
                console.log('data', response.data)
                self.optionsSelectCheck = data.provinces;
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
    methods: {
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
            this.url = URL.createObjectURL(this.file);
        },
        async onCreateFacilityHotel() {
            let self = this;
            let formData = new FormData();
            formData.append('image', this.file);
            formData.append('name', this.facility.name);
            formData.append('nameEn', this.facility.nameEn);
            formData.append('status', 1);
            console.log('formData', formData)
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.popups;
            await axios.post(url,
                    formData,
                ).then(function (response) {
                    localStorage.setItem("create_success", '1');
                    self.$router.go(-1);
                })
                .catch(error => {
                    self.loading = false;
                    const data = error.response ? error.response.data : error.response;
                    this.$awn.alert(data.message);
                })
        },
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style><style scoped>
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

.no-padd {
    padding-left: 0;
    padding-right: 0;
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
