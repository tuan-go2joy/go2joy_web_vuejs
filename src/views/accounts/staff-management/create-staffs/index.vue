<template>
    <div class="dashboard">
        <div class="rightbar" >
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.acc_lf_side.staff_management')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item " aria-current="page"><a href="staff-management">{{$t('breadcrumb.acc_lf_side.staff_management')}}</a></li>
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
                            <p>{{ $t('table.account_sale.create.user_id')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="staffs.userId"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.full_name')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="staffs.fullName"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.role')}}</p>
                        </div>
                        <div class="col-md-10">
                            <filterselect
                                class="filter-trip"
                                :placeholder="$t('table.account_sale.create.role')"
                                :is-keyword="true"
                                :data="region"
                                @input="filterDataUser"
                                @reloadFilterData="reloadFilterData"
                            />
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.mobile')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="staffs.mobile"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.email')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="staffs.email"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.address')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="staffs.address"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.role_region')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="$t('Region.south')"></el-checkbox>
                                <el-checkbox :label="$t('Region.north')"></el-checkbox>
                                <el-checkbox :label="$t('Region.middle')"></el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.memo')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="staffs.memo"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.password')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="staffs.password"></el-input>
                        </div>
                    </div>
                    <div class="row input-padding">
                        <div class="col-md-2">
                            <p>{{ $t('table.account_sale.create.confirm_password')}}</p>
                        </div>
                        <div class="col-md-10">
                            <el-input type="text" v-model="staffs.confirm_password"></el-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="right-content">
                                <el-button  type="info" size="large" @click="$router.go(-1)">
                                    {{$t('table.account_sale.button.back')}}
                                </el-button>
                                <el-button  type="success" size="large" @click="onCreateStaff">
                                    <i class="feather icon-save mr-2"/>
                                    {{$t('table.account_sale.button.create')}}
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
                region: [
                    {
                        name: 'testtttt1', 
                        value: 1
                    },
                    {
                        name: 'testtttt2', 
                        value: 2
                    },
                    {
                        name: 'testtttt3', 
                        value: 3
                    },
                    {
                        name: 'testtttt4', 
                        value: 4
                    },
                    {
                        name: 'testtttt5', 
                        value: 5
                    },
                    {
                        name: 'testtttt6', 
                        value: 6
                    },
                    {
                        name: 'testtttt6', 
                        value: 6
                    },
                ],
                checkList:[],
                staffs:[],
            }
        },
        async created(){
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.users+'?status=1';
            
        },
        methods: {
            filterDataUser(data){
                this.staffs.roleSn = data.item.value;
            },
          
            async onCreateStaff(){
                if(this.staffs.password == this.staffs.comfirm_password){
                    let self = this;
                    let url = this.appConfig.api.url + this.appConfig.api.endpoint.staffs 
                    await axios.post(url,{
                            userId:     self.staffs.userId,
                            fullName:   self.staffs.fullName,
                            roleSn:     self.staffs.roleSn,
                            email:      self.staffs.email,
                            address:    self.staffs.address,
                            memo:       self.staffs.memo,
                            password:   self.staffs.password,
                        }).then(function (response) {
                            localStorage.setItem("create_success", '1');
                            self.$router.go(-1);
                        })
                        .catch(error => {
                            self.loading = false;
                            const data = error.response.data;
                            this.$message({
                                type:   'error',
                                message: error.response.data
                            });
                        })
                }else{
                    this.$message({
                        type:   'error',
                        message: `${this.$t("table.account_sale.create.message.password")}`
                    });
                }
               
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
                        self.$message({
                            type:   'error',
                            message: error.response.data
                        });
                    })
            },
        }
    }
</script>

