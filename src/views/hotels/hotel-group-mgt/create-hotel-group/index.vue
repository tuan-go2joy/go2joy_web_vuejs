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
                            <li class="breadcrumb-item " aria-current="page"><a href="hotel-group-mgt">{{$t('breadcrumb.hotel-group-mgt')}}</a></li>
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
                        <p>{{ $t('table.hotels.create.namegroup')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create.namegroup')" type="text" v-model="name"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create.ownerinformation')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.ownername')" type="text" v-model="ownerName"></el-input>
                    </div>

                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.ownertel')" type="text" v-model="ownerTel"></el-input>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.owneremail')" type="text" v-model="ownerEmail"></el-input>
                    </div>
                </div>

                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create.companyinformation')}}</p>
                    </div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.companyname')" type="text" v-model="companyName"></el-input>
                    </div>

                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.businesslisencenumber')" type="text" v-model="bln"></el-input>
                    </div>

                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.companytel')" type="text" v-model="companyTel"></el-input>
                    </div>

                </div>
                <div class="row input-padding">
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                        <el-input :placeholder="$t('table.hotels.create.companyemail')" type="text" v-model="companyEmail"></el-input>
                    </div>
                </div>
                <div class="row input-padding">
                    <div class="col-md-2">
                        <p>{{ $t('table.hotels.create.companyaddress')}}</p>
                    </div>
                    <div class="col-md-9">
                        <el-input :placeholder="$t('table.hotels.create.companyaddress')" type="text" v-model="companyAddress"></el-input>
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
                            <el-button type="info" size="large" @click="$router.go(-1)">
                                {{$t('table.hotels.button.back')}}
                            </el-button>
                            <el-button type="success" size="large" @click="onCreateUser">
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
    name: "CreateGroupHotelMgt",
    components: {
        Filterselect
    },
    data() {
        return {

            bln: "",
            companyAddress: "",
            companyEmail: "",
            companyName: "",
            companyTel: "",
            lastUpdated: "",
            name: "",
            ownerEmail: "",
            ownerName: "",
            ownerTel: "",
            hotels: [],
            scope: [{
                    name: "Public",
                    value: 0
                },
                {
                    name: "Private",
                    value: 1
                }
            ],
        }
    },
    async created() {
        let self = this;
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
        }
        let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelGroups + '?status=1';
        await axios.get(url)
            .then(response => {
                this.posts = response.data
            })
            .catch(error => {
                self.loading = false;
                try {
                    const data = error.response.data;
                    self.$message({
                        type: 'error',
                        message: data.message
                    });
                } catch (err) {
                    self.$message({
                        type: 'error',
                        message: 'Can\'t connect to server. Please try again later.'
                    });
                }
            })
    },
    methods: {
        async onCreateUser() {
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
                bln : this.bln,
                companyAddress: this.companyAddress,
                companyEmail : this.companyEmail,
                companyName : this.companyName,
                companyTel : this.companyTel,
                name : this.name,
                ownerEmail : this.ownerEmail,
                ownerName : this.ownerName,
                ownerTel : this.ownerTel,

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
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.hotelgroup +
                `?keyword=${keyword ? keyword : ''}`;
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    let data = response.data.data;
                    self.hotels = [];
                    data.hotelgroup.map(function (currentValue, index, array) {
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
                        this.$awn.alert('Can\'t connect to server.<br/>Please try again later.');
                    }
                })
        },
    }
}
</script>
