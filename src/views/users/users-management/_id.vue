
<template>
    <div class="dashboard">
        <div class="rightbar">
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.u_lf_side.name')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item" aria-current="page"><a href="users">{{$t('breadcrumb.u_lf_side.name')}}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.edit')}}</li>
                            </ol>
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- End Breadcrumbbar -->
            <!-- Start Contentbar-->
            <div class="contentbar" v-if="user" >
                <div class="card m-b-30 customs-detail-bar">
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.user_id')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="user.email"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.nickname')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="user.nickName"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">

                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.gender')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-radio-group v-model="user.gender">
                                <el-radio :label="0">{{ $t('table.user.gender.none')}}</el-radio>
                                <el-radio :label="1">{{ $t('table.user.gender.male')}}</el-radio>
                                <el-radio :label="2">{{ $t('table.user.gender.female')}}</el-radio>
                            </el-radio-group>
                        
                        </div>
                    </div>
                    <div class="row input-padding">

                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.birthday')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-date-picker
                                v-model="user.birthday"
                                type="date"
                                placeholder="From"
                                value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="row input-padding">

                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.email')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="user.email"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">

                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.mobile')}}</p>
                        </div>
                        <div class="col-md-10">
                            <strong>+</strong><el-input type="text" v-model="user.countryCode" style="width:48px;margin-left: 6px;" class="countryCode"></el-input>
                            <el-input type="text" v-model="user.mobile" style="width: 148px;"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">

                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.address')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="user.address"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">

                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.password')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="password" v-model="user.password"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.user.edit.re_password')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="password" style="height: 85%;" v-model="user.re_password"></el-input>
                        </div>
                    </div>
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
        name: "UserManagement",
        data() {
            return {
                loading: true,
                user: {
                    re_password: '',
                },
            }
        },
        async created(){
            const self = this;
            const id = this.$route.query.sn;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.users+'/'+id;
            await axios.get(url)
                    .then(function (response) {
                        self.user = response.data.data
                        self.loading = false;
                    })
                    .catch(error => {
                        console.log(error);
                    })
        },
        methods: {
            async updateUser(){
                try {
                    const self = this;
                    axios.defaults.headers = {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                    }
                    let url = this.appConfig.api.url + this.appConfig.api.endpoint.users+'/'+self.user.sn;
                    await axios.put(url,{
                        nickName:    self.user.nickName,
                        gender:      self.user.gender,
                        birthday:    self.user.birthday,
                        email:       self.user.email,
                        countryCode: self.user.countryCode,
                        mobile:      self.user.mobile,
                        address:     self.user.address,
                        password:    CryptoJS.MD5(self.user.password).toString(),
                    }).then(async function (response) {
                        await axios.get(url)
                            .then(function (res) {
                                self.user = res.data.data
                                self.$message({
                                    type:    'success',
                                    message: `${self.$t("table.user.edit.message.success")}`
                                });
                            })
                            .catch(error => {
                                self.$message({
                                    type:   'error',
                                    message: error
                                });
                            })
                    }).catch(error => {
                        const data = error.response.data;
                        self.$message({
                            type:   'error',
                            message: data.message
                        });
                    })
                }catch(error) {
                    this.$message({
                        type:   'error',
                        message: error
                    });
                }
            },
            onUpdateUser(){
                if(!this.user.password  || this.user.password == ' ' || this.user.password == 'undefined' ){
                    this.updateUser();
                }else{
                    if(this.user.re_password === this.user.password){
                        this.updateUser();
                    }else{
                         this.$message({
                            type:    'error',
                            message: `${this.$t("table.user.edit.message.password")}`
                        });
                    }
                }
            }
        }
    }
</script>

