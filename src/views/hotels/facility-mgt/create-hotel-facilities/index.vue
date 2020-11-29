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
            <div class="card m-b-30 customs-detail-bar">
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_facility.facility_name_vn')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create_facility.facility_name_vn')" type="text" v-model="facility.name"></el-input>
                    </div>
                </div>

                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_facility.facility_name_en')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create_facility.facility_name_en')" type="text" v-model="facility.nameEn"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_facility.image')}}</p>
                    </div>
                    <div class="col-md-10">
                        <div class="col-md-4 no-padd" style="float:left">
                            <div id="preview">
                                <img v-if="url" :src="url" />
                            </div>
                        </div>
                        <div class="col-md-4" style="float:left">
                            <input type="file" accept="image/png, image/jpeg" id="file" ref="file" v-on:change="handleFileUpload()" >
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
export default {
    name: "CreateFacilitiesHotelMgt",
    components: {
        Filterselect
    },
    data() {
        return {
             facility:{
                name: '',
                nameEn: ''
            },
            file:'',
            url:''
        }
    },
    async created() {
        let self = this;
        axios.defaults.headers = {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token'),
        }
    },
    methods: {
         handleFileUpload(){
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
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelFacilities;
            await axios.post(url,
                    formData,
                    ).then(function (response) {
                        localStorage.setItem("create_success", '1');
                        self.$router.go(-1);
                    })
                    .catch(error => {
                        self.loading = false;
                        const data =  error.response ? error.response.data : error.response;
                        this.$awn.alert(data.message);
                    })
        },
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
.no-padd{
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
