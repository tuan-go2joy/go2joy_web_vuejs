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
                            <li class="breadcrumb-item " aria-current="page"><a href="service-agreement-mgt">{{$t('breadcrumb.service_agree')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('table.button.update')}}</li>
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
                        <p>{{ $t('table.service_agreement_mgt.update_service_agreement_mgt.update_private_policy_service_agreenebt')}}</p>
                    </div>
                    <div class="col-md-9">
                        <ckeditor :height="300" :editor="editor" v-model="enDescription" :config="editorConfig">
                        </ckeditor>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.service_agreement_mgt.update_service_agreement_mgt.update_supdate_ervice_agreement_service_agreenebt')}}</p>
                    </div>
                    <div class="col-md-9">
                        <ckeditor :height="300" :editor="editor" v-model="enDescription" :config="editorConfig">
                        </ckeditor>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.service_agreement_mgt.update_service_agreement_mgt.update_mileage_point_service_agreenebt')}}</p>
                    </div>
                    <div class="col-md-9">
                        <ckeditor :height="300" :editor="editor" v-model="enDescription" :config="editorConfig">
                        </ckeditor>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.service_agreement_mgt.update_service_agreement_mgt.update_payment_policy_service_agreenebt')}}</p>
                    </div>
                    <div class="col-md-9">
                        <ckeditor :height="300" :editor="editor" v-model="enDescription" :config="editorConfig">
                        </ckeditor>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="right-content">

                            <el-button type="info" size="large" @click="$router.go(-1)">
                                {{$t('table.hotels.button.back')}}
                            </el-button>

                            <el-button type="success" size="large" @click="onUpdateServiceAgreementMgt">
                                <i class="feather icon-save mr-2" />
                                {{$t('table.button.update')}}
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    name: "UpdateServiceAgreementMgt",
    components: {
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
            
        }
    },
    async onUpdateServiceAgreementMgt() {
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
        this.loadDistrict()
    },
    methods: {
      
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

</style>
