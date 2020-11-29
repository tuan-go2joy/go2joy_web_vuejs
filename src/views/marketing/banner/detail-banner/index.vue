
<template>
    <div class="dashboard">
        <div class="rightbar" >
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.home')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item "><a href="dashboard">{{$t('breadcrumb.dashboard')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.detail')}}</li>
                            </ol>
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- End Breadcrumbbar -->
            <!-- Start Contentbar-->
            <div v-if="content" class="contentbar">
                <div class="card m-b-30 customs-detail-bar">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.banner.label_header.label_header_detail.title')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.title"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.banner.label_header.label_header_detail.linked_type')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.targetType"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.banner.label_header.label_header_detail.status')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.display"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.banner.label_header.label_header_detail.display_area')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.title1"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.banner.label_header.label_header_detail.last_update')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="content.lastUpdate"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.banner.label_header.label_header_detail.image')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-image 
                                        style="width: 200px; height: 100px" 
                                        :src="`https://go2joy.s3-ap-southeast-1.amazonaws.com/`+content.imagePath">
                                    </el-image>
                                </div>
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
        name: "DetailBanner",
        data() {
            return {
                content: [],
            }
        },
        async created(){
            const self = this;
            const id = this.$route.query.sn;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.banners+'/'+id;
            await axios.get(url)
                .then(async function (response) {
                    self.content = response.data.data;
                    await self.getStatus(self.content.display);
                    await self.getLinkType(self.content.targetType);
                    
                })
                .catch(error => {
                    console.log(error);
                })
           
        },
        methods: {
            getStatus(value){
                switch (value){
                    case 1:
                       return  this.content.display = `${this.$t("table.banner.status.active")}`;
                       break;
                    case 2:
                       return  this.content.display = `${this.$t("table.banner.status.disable")}`;
                       break;
                }
            },
            getLinkType(value){
                switch (value){
                    case 1:
                        return this.content.targetType = 'PROMOTION'
                    case 2:
                        return this.content.targetType = 'HOTEL'
                    case 3:
                        return this.content.targetType = 'NOTICE'
                    case 4:
                        return this.content.targetType = 'LINK'
                    case 5:
                        return this.content.targetType = 'AREA'
                    case 6:
                        return this.content.targetType = 'MILEAGE_POINT'
                    case 7:
                        return this.content.targetType = 'COUPON'
                    case 8:
                        return this.content.targetType = 'DIRECT_DISCOUNT'
                    case 9:
                        return this.content.targetType = 'INVITE_FRIEND'
                    case 10:
                        return this.content.targetType = 'PROMOTION_GROUP'
                    case 12:
                        return this.content.targetType = 'AMENITY_PACK_HOTEL'
                }
            }
        }
    }
</script>

