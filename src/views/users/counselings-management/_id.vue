
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
                                <li class="breadcrumb-item active" aria-current="page">{{$t('breadcrumb.edit')}}</li>
                            </ol>
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- End Breadcrumbbar -->
            <!-- Start Contentbar-->
            <div v-if="user.appUser" class="contentbar">
                <div class="card m-b-30 customs-detail-bar">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.user_id')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.email : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.nickname')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.nickName : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.gender')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.gender == 1 ? $t('table.user.gender.male'): $t('table.user.gender.female') : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.birthday')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.birthday : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.email')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.email : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.mobile')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.mobile : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.address')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.address : user.appUser"></el-input>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.member_id')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.memberId : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.login_by')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? (user.appUser.viaApp == 1 ? 'Manual' : (user.appUser.viaApp == 2 ? 'Facebook' : (user.appUser.viaApp == 3 ? 'Google' : 'Apple'))) : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.device_code')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" 
                                    v-model="user.appUser ? (user.appUser.mobileDevice.os == '1' ? 'Ios' : 'Android'+' | '+user.appUser.mobileDevice.appVersion+' | '+(user.appUser.mobileDevice.language == 3 ? 'Vietnamese' : (user.appUser.mobileDevice.language == 2 ? 'English' : 'Korean'))+' | '+ user.appUser.mobileDevice.osVersion+' | '+user.appUser.mobileDevice.phoneModel+' | '+formatDate(user.appUser.mobileDevice.registerTime)) : user.appUser "></el-input>
                                </div> 
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.status')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.isLogin == 1 ? $t('table.counseling.status.login') : $t('table.counseling.status.un_login') : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.last_open_app')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.appUser ? user.appUser.mobileDevice.address : user.appUser"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">
                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.res_time')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.createTime"></el-input>
                                </div>
                            </div>
                            <div class="row input-padding">

                                <div class="col-md-3">
                                    <p>{{ $t('table.counseling.reply.last_update')}}</p>
                                </div>
                                <div class="col-md-9">
                                    <el-input type="text" disabled="disabled" v-model="user.lastUpdate"></el-input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card m-b-30 customs-detail-bar">
                    <p class="text-Q-A" style="position: absolute;">{{ $t('table.counseling.reply.contentQ&A')}}</p>
                    <div class="row">
                        <div class="col-md-12 row" style="text-align: end;">
                            <div class="scroll-replay">
                                <div v-for="counseling in counselings.counselingDetails">
                                    <div class="content-box"  v-if="counseling.replyStaff.sn == null">
                                        <p class="content">{{ counseling.content}}</p>
                                        <p class="create-time"><span class="bold">{{user.appUser ? user.appUser.nickName : user.appUser}}</span> {{formatDate(user.lastUpdate)}}</p>
                                    </div>
                                    <div class="reply-box"  v-if="counseling.replyStaff.sn !== null">
                                        <p class="content">{{ counseling.content}}</p>
                                        <p class="create-time"><span class="bold">{{user.appUser ? user.appUser.nickName : user.appUser}}</span> {{formatDate(user.lastUpdate)}}</p>
                                    </div>
                                </div>
                                <div class="reply-button">
                                    <textarea rows="3" style="width: 47%;" v-model="content"></textarea>
                                    <div>
                                        <el-button  type="success" size="large" @click="onReply">
                                            {{$t('table.counseling.button.edit')}}
                                        </el-button>
                                    </div>
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
        name: "CounselingManagement",
        data() {
            return {
                loading: true,
                user: {},
                counselings:{},
                content: '',
            }
        },
        async created(){
            const self = this;
            const id = this.$route.query.sn;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url_user = this.appConfig.api.url + this.appConfig.api.endpoint.counselings+'/'+id;
            let url_counselings = this.appConfig.api.url + this.appConfig.api.endpoint.counselings+'/'+id+'/details?limit=100';
            await axios.get(url_user)
                .then(async function (response) {
                    self.user = response.data.data;
                    await axios.get(url_counselings)
                        .then(function (response) {
                            self.counselings = response.data.data
                            self.loading = false;
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.log(error);
                })
           
        },
        methods: {
            async onReply(){
                const self = this;
                try {
                    axios.defaults.headers = {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
                    }
                    let url = this.appConfig.api.url + this.appConfig.api.endpoint.counselings+'/'+this.$route.query.sn+'/details';
                    await axios.post(url,{
                        content:    self.content,
                    }).then(function (response) {
                            self.counselings.counselingDetails.push(response.data.data);
                            self.content = " ";
                            self.$message({
                                type:    'success',
                                message: `${self.$t("table.counseling.reply.message.success")}`
                            });
                        })
                        .catch(error => {
                            const data = error.response.data;
                            self.$message({
                                type:   'error',
                                message: data.message
                            });
                        })
                }catch(error) {
                    const data = error.response.data;
                    this.$message({
                        type:   'error',
                        message: data.message
                    });
                }
            },
        }
    }
</script>

