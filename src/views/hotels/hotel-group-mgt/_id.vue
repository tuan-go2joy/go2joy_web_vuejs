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
                            <li class="breadcrumb-item" aria-current="page"><a href="hotel-group-mgt">{{$t('breadcrumb.hotel-group-mgt')}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.edit')}}</li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
        <!-- End Breadcrumbbar -->
        <!-- Start Contentbar-->
        <div class="contentbar" v-if="user">
            <div class="card m-b-30 customs-detail-bar">
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create.namegroup')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create.namegroup')" type="text" v-model="user.name"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create.ownerinformation')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.ownername')" type="text" v-model="user.ownerName"></el-input>
                    </div>

                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.ownertel')" type="text" v-model="user.ownerTel"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.owneremail')" type="text" v-model="user.ownerEmail"></el-input>
                    </div>
                </div>

                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create.companyinformation')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.companyname')" type="text" v-model="user.companyName"></el-input>
                    </div>

                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.businesslisencenumber')" type="text" v-model="user.bln"></el-input>
                    </div>

                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.companytel')" type="text" v-model="user.companyTel"></el-input>
                    </div>

                </div>
                <div class="row input-padding">
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.companyemail')" type="text" v-model="user.companyEmail"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create.companyaddress')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create.companyaddress')" type="text" v-model="user.companyAddress"></el-input>
                    </div>
                </div>
                <!-- <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create.addhoteltogroup')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create.addhoteltogroup')" type="text" v-model="hotelgroup.addhoteltogroup"></el-input>
                    </div>
                </div> -->
                <div class="row">
                        <div class="col-md-12">
                            <div class="right-content">
                                <el-button  type="info" size="large" @click="$router.go(-1)">
                                    {{$t('table.user.button.back')}}
                                </el-button>
                                <el-button  type="success" size="large" @click="onUpdateUser">
                                    <i class="feather icon-save mr-2"/>
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
    name: "HotelGrouptMgt",
    data() {
        return {
            loading: true,
            user: {
                re_password: '',
            },
        }
    },
    async created() {
        const self = this;
        const id = this.$route.query.sn;
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
        }
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelGroups + '/' + id;
        console.log('data url', url)
        await axios.get(url)
            .then(function (response) {

                self.user = response.data.data
                console.log('data res', self.user)
                self.loading = false;
            })
            .catch(error => {
                console.log(error);
            })
    },
    methods: {
        async updateUser() {
            try {
                const self = this;
                const id = this.$route.query.sn;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                }
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelGroups + '/' + id;
                console.log('self.user', self.user)
                 console.log('data url', url)
                await axios.put(url, {
                    bln: self.user.bln,
                    companyAddress: self.user.companyAddress,
                    companyEmail: self.user.companyEmail,
                    companyName: self.user.companyName,
                    companyTel: self.user.companyTel,
                    lastUpdated: self.user.lastUpdated,
                    name: self.user.name,
                    ownerEmail: self.user.ownerEmail,
                    ownerName: self.user.ownerName,
                    ownerTel: self.user.ownerTel,
                }).then(async function (response) {
                    await axios.get(url)
                        .then(function (res) {
                            self.user = res.data.data
                            self.$message({
                                type: 'success',
                                message: `${self.$t("table.user.edit.message.success")}`
                            });
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
            if (!this.user.password || this.user.password == ' ' || this.user.password == 'undefined') {
                this.updateUser();
            } else {
                if (this.user.re_password === this.user.password) {
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
