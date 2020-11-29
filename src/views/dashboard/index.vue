<template>
    <div class="dashboard">
        <div class="rightbar">
            <!-- Start Breadcrumbbar -->
            <div class="breadcrumbbar">
                <div class="row align-items-center">
                    <div class="col-md-8 col-lg-8">
                        <h4 class="page-title">{{$t('breadcrumb.home')}}</h4>
                        <div class="breadcrumb-list">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="dashboard">{{$t('breadcrumb.home')}}</a></li>
                                <li class="breadcrumb-item active"><a href="dashboard">{{$t('breadcrumb.dashboard')}}</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Breadcrumbbar -->

            <!-- Start Contentbar-->
            <div class="contentbar">
                <!-- Start row -->
                <div class="row">
                    <!-- Start col -->
                    <div class="col-lg-12">
                        <div class="card m-b-30">
                            <div class="card-body">
                                <datatable 
                                    :loading="loading" 
                                    :columns="columns"
                                    :data="tableData" 
                                    :actions="actions"
                                    :actionsWidth="actionsWidth"
                                    :pageSize="pageSize"
                                    :pageSizes="pageSizes" 
                                    :tableLabel="tableLabel"
                                    @onEditTable="onEditDashboard"
                                    @onDerect="onDerect">
                                </datatable>
                            </div>
                        </div>
                    </div>
                    <!-- End col -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Datatable from "../../components/Datatable";

    export default {
        name: "Dashboard",
        components: {
            Datatable,
        },
        data() {
            return {
                loading: true,
                columns: [
                    {
                        prop: 'title1',
                        hide: 'false',
                        label:'category',
                        href: 'dashboard-detail',
                        type: 'link',
                        sn:   'sn',
                        width: 350,
                        sortable: true,
                        formatter: this.defaultFormatter,
                    },
                    {
                        prop: 'title2',
                        hide: 'false',
                        label: 'title',
                        type: 'text',
                        width: 100,
                        sortable: true,
                        formatter: this.defaultFormatter 
                    },
                    { 
                        prop: 'display', 
                        hide: 'false',
                        type: 'text', 
                        label: 'display', 
                        width: 120, 
                        sortable: true, 
                        formatter: (value) => {
                            return value === 1 ? '✔' : '✘'
                        }
                    },
                    { 
                        prop: 'lastUpdate', 
                        hide: 'false',
                        type: 'text', 
                        label: 'last_update', 
                        width: 250, 
                        sortable: true, 
                        formatter: this.formatDate
                    }
                ],
                tableLabel: 'dashboard',
                tableData: [],
                pageSizes: [10, 15, 20, 30, 50],
                pageSize: 10,
                actionsWidth: 250,
                actions:[
                    {
                        lable:        'setup',
                        type:         'button',
                        onClick:      `onEdit`,
                        clickActions: 'edit',
                        param:        'sn'
                    },
                ],
            }
        },
        async created(){
            let current_page = localStorage.getItem("current_page");
            if(current_page == 'null'){
                localStorage.setItem("current_page", '1');
            }
        },
        mounted() {
            let self = this;
            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLocalStorageWithExpiry('access_token')
            }
            let url = this.appConfig.api.url + this.appConfig.api.endpoint.homeCategories+'?status=1';
            axios.get(url)
                .then(function (response) {
                    self.loading = false;
                    let data = response.data.data;
                    self.tableData = data;
                })
                .catch(error => {
                    self.loading = false;
                    try {
                        const data = error.response.data;
                        self.$message({
                            type:    'error',
                            message: data.message
                        });
                    } catch (err) {
                        self.$message({
                            type:    'error',
                            message: 'Can\'t connect to server. Please try again later.'
                        });
                    }
                })
        },
        
        methods: {
            onEditDashboard(id){
                this.$router.push(`/hotel-management/dashboard-edit?sn=${id}`);
            },
            onDerect(href,query){
                this.$router.push(`/hotel-management/${href}?sn=${query}`);
            },
        },
    }
</script>
