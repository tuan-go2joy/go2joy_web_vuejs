<template>
<div class="dashboard">
    <div class="rightbar">
        <!-- Start Breadcrumbbar -->
        <div class="breadcrumbbar">
            <div class="row align-items-center">
                <div class="col-md-8 col-lg-8">
                    <h4 class="page-title">{{$t('breadcrumb.hotel-group-mgt')}}</h4>
                    <div class="breadcrumb-list">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                            <li class="breadcrumb-item " aria-current="page"><a href="product-type-mgt">{{$t('breadcrumb.product-type-mgt')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.edit')}}</li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
        <!-- End Breadcrumbbar -->
        <!-- Start Contentbar-->
        <div class="contentbar" v-if="productType">
            <div class="card m-b-30 customs-detail-bar">
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_group-type.product_type_name')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create_group-type.product_type_name')" type="text" v-model="productType.name"></el-input>
                    </div>
                </div>

                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_group-type.product_type_nameEn')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create_group-type.product_type_nameEn')" type="text" v-model="productType.nameEn"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create_group-type.image')}}</p>
                    </div>
                    <div class="col-md-9">
                        <div style="float:left;margin-right: 12px;">
                            <div id="preview">
                                <img :src="src" />
                            </div>
                        </div>
                        <div style="float:left">
                            <input type="file" accept="image/png, image/jpeg" id="file" ref="file" v-on:change="handleFileUpload()">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="right-content">
                            <el-button type="info" size="large" @click="$router.go(-1)">
                                {{$t('table.user.button.back')}}
                            </el-button>
                            <el-button type="success" size="large" @click="updateHotel">
                                <i class="feather icon-save mr-2" />
                                {{$t('table.user.button.edit')}}
                            </el-button>
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
export default {
    name: "EditHotelGroupTypeMgt",
    data() {
        return {
            loading: true,
            productType: {
                re_password: '',
            },
            src: '',
            file: '',
            srcList: [
                'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
            ]
        }
    },
    async created() {
        const self = this;
        const id = this.$route.query.sn;
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token'),
            'Content-Type': 'multipart/form-data'
        }
        let formData = new FormData();
        formData.append('file', this.file);
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelProductsType + '/' + id;
        console.log('data url', url)
        await axios.get(url, formData)
            .then(function (response) {
                console.log('response', response)
                self.productType = response.data.data
                console.log('data res', self.productType)
                self.src = `https://go2joy.s3-ap-southeast-1.amazonaws.com/` + self.productType.imagePath
                self.loading = false;
            })
            .catch(error => {
                console.log(error);
            })
    },
    methods: {
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
            this.url = URL.createObjectURL(this.file);
            // console.log('this.file', this.file)
            // console.log('this.url', this.url)
            this.src = this.url

        },
        async updateHotel() {
            try {

                const id = this.$route.query.sn;
                axios.defaults.headers = {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token'),
                }
                let self = this;
                let formData = new FormData();
                formData.append('image', this.file);
                formData.append('name', this.productType.name);
                formData.append('nameEn', this.productType.nameEn);
                formData.append('status', 1);
                console.log('formData', formData)
                let url = self.appConfig.api.url + self.appConfig.api.endpoint.hotelProductsType + '/' + id+ '?_method=PUT';
                await axios.post(url,
                     formData
                ).then( function (response) {
                     axios.get(url)
                        .then(function (res) {
                            self.productType = res.data.data
                            self.$message({
                                type: 'success',
                                message: `${self.$t("table.user.edit.message.success")}`
                            });
                            self.$router.go(-1);
                        })
                        .catch(error => {
                            self.$message({
                                type: 'error',
                                message: error
                            });
                        })
                }).catch(error => {
                    const data = error.response.data;
                    self.$message({
                        type: 'error',
                        message: data.message
                    });
                })
            } catch (error) {
                this.$message({
                    type: 'error',
                    message: error
                });
            }
        },
        onUpdateUser() {
            if (!this.productType.password || this.productType.password == ' ' || this.productType.password == 'undefined') {
                this.updateUser();
            } else {
                if (this.productType.re_password === this.productType.password) {
                    this.updateUser();
                } else {
                    this.$message({
                        type: 'error',
                        message: `${this.$t("table.user.edit.message.password")}`
                    });
                }
            }
        }
    }

}
</script>

<style scoped>
#preview {
    width: 200px;
    height: 100px
}

#preview img {
    width: 100%;
    height: auto
}
</style>
