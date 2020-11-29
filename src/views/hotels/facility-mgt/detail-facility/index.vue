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
                            <li class="breadcrumb-item " aria-current="page"><a href="facility-mgt">{{$t('breadcrumb.facility-mgt')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.detail')}}</li>
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
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <td class="td-title">{{ $t('table.hotels.detail-facility.hotel_name')}}</td>
                                <td>
                                    {{ data.fullName }}
                                </td>
                            </tr>
                            <tr>
                                <td class="td-title">{{ $t('table.hotels.detail-facility.full_name')}}</td>
                                <td>
                                    {{ data.fullName }}
                                </td>
                            </tr>
                            <tr>
                                <td class="td-title">{{ $t('table.hotels.detail-facility.enable')}}</td>
                                <td>
                                    <p v-if="data.status == 1"><i class="dripicons-checkmark"></i></p>
                                  
                                    <p v-if="data.status == 0"></p>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-title">{{ $t('table.hotels.detail-facility.user_id')}}</td>
                                <td>
                                    {{ data.userId }}
                                </td>
                            </tr>
                            <tr>
                                <td class="td-title">{{ $t('table.hotels.detail-facility.mobile')}}</td>
                                <td>
                                    {{ data.mobile }}
                                </td>
                            </tr>
                            <tr>
                                <td class="td-title">{{ $t('table.hotels.detail-facility.email')}}</td>
                                <td>
                                    {{ data.email }}
                                </td>
                            </tr>
                            <tr>
                                <td class="td-title">{{ $t('table.hotels.detail-facility.debt_email')}}</td>
                                <td>
                                    {{ data.debtEmail }}
                                </td>
                            </tr>
                            <tr>
                                <td class="td-title">{{ $t('table.hotels.detail-facility.memo')}}</td>
                                <td>
                                    {{ data.memo }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import Filterselect from "../../../../components/FilterSelect";
export default {
    name: "DetailFacilitiesHotelMgt",
    components: {
        Filterselect
    },
    data() {
        return {
            data: {}
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
    mounted() {
        let self = this;
        const id = this.$route.query.sn;
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
        }
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.staffs + '/' + id;
        axios.get(url)
            .then(function (response) {
                self.loading = false;
                let data = response.data.data;
                self.data = data
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
