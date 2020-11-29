<template>
    <div class="dashboard">
        <div class="rightbar" >
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.u_lf_side.counseling')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item " aria-current="page"><a href="counselings">{{$t('breadcrumb.u_lf_side.counseling')}}</a></li>
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
                            <p>{{ $t('table.counseling.create.title')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="counselings.title"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.counseling.create.content')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="counselings.content"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">

                        <div class="col-md-2">
                            <p>{{ $t('table.counseling.create.sendUser')}}</p>
                        </div>
                        <div class="col-md-10">
                             <filterselect
                                class="filter-trip"
                                :placeholder="$t('table.counseling.create.placeholderUser')"
                                :is-keyword="true"
                                :data="user"
                                @input="filterDataUser"
                                @reloadFilterData="reloadFilterData"
                            />
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.counseling.create.scope')}}</p>
                        </div>
                        <div class="col-md-10">
                             <filterselect
                                class="filter-trip"
                                :placeholder="$t('table.counseling.create.placeholderScope')"
                                :is-keyword="true"
                                :data="scope"
                                @input="filterDataScope"
                                v-model="counselings.scope"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="right-content">
                                <el-button  type="info" size="large" @click="$router.go(-1)">
                                    {{$t('table.counseling.button.back')}}
                                </el-button>
                                <el-button  type="success" size="large" @click="onCreateUser">
                                    <i class="feather icon-save mr-2"/>
                                    {{$t('table.counseling.button.create')}}
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
        name: "CreateCounseling",
        components: {
            Filterselect
        },
        data() {
            return {
                counselings: [],
                user:[],
                scope:[
                    {name: "Public", value: 2},
                    {name: "Private", value: 1}
                ],
            }
        },
        async created(){
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.users+'?status=1';
            await axios.get(url)
                    .then(function (response) {
                        self.loading = false;
                        let data = response.data.data;
                        data.appUsers.map(function(currentValue, index, array) {
                            self.user.push({name: currentValue.nickName, value: currentValue.sn});
                        });
                    })
                    .catch(error => {
                        self.loading = false;
                        try {
                            const data = error.response.data;
                            self.$message({
                                type:   'error',
                                message: data.message
                            });
                        } catch (err) {
                            self.$message({
                                type:   'error',
                                message: 'Can\'t connect to server. Please try again later.'
                            });
                        }
                    })
        },
        methods: {
            filterDataUser(data){
                this.counselings.user = data.item.value;
            },
            filterDataScope(data){
                this.counselings.scope = data.item.value;
            },
            async onCreateUser(){
                let self = this;
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.counselings 
                await axios.post(url,{
                        title:     this.counselings.title,
                        content:   this.counselings.content,
                        appUserSn: this.counselings.user,
                        scope:     this.counselings.scope,
                    }).then(function (response) {
                        localStorage.setItem("create_success", '1');
                        self.$router.go(-1);
                    })
                    .catch(error => {
                        self.loading = false;
                        const data = error.response.data;
                        this.$awn.alert(data.message);
                    })
            },
            reloadFilterData(keyword) {
                let self = this;
                axios.defaults.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                }
                let url = this.appConfig.api.url + this.appConfig.api.endpoint.counselings +
                    `?keyword=${keyword}`;
                axios.get(url)
                    .then(function (response) {
                        self.loading    = false;
                        let data        = response.data.data;
                        self.user = [];
                        data.counselings.map(function(currentValue, index, array) {
                            if(currentValue.nickName && currentValue.nickName != null){
                                self.user.push({name: currentValue.nickName, value: index});
                            }
                        });
                    })
                    .catch(error => {
                        self.loading = false;
                        try {
                            const data = error.response.data;
                            this.$message({
                                type: 'error',
                                message: data.message
                            });
                        } catch (err) {
                            this.$message({
                                type:    'error',
                                message: 'Can\'t connect to server. Please try again later.'
                            });
                        }
                    })
            },
        }
    }
</script>

