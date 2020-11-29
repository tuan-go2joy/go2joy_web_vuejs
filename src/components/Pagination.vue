<template>
    <div class="pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="filtering.pageSize"
            :page-size.sync ="filtering.pageSize"
            :page-sizes="pageSizes"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: [
            'total',
            'pageSizes',
            'pageSize',
        ],
        data() {
            return {
                filtering: {
                    keyword: '',
                    dateFrom: '',
                    dateTo: '',
                    status: -1,
                    pageSize: 10,
                    currentPage: 1,
                },
            };
        },
        methods: {
            handleSizeChange(size) {
                this.filtering.pageSzie = size;
                this.$emit('changePageSize', this.filtering);
            },
            handleCurrentChange(currentPage) {
                this.filtering.currentPage = currentPage;
                this.$emit('changeCurrentPage', this.filtering);
            }
        },
        watch: {
            pageSize: function(newVal, oldVal) {
                this.filtering.pageSize = newVal;
            }
        }
    }
</script>

<style scoped lang="css">
    .el-pagination {
        color: #303133;
        font-weight: 700;
        line-height: 1.5em;
        height: 3em;
        overflow: auto;
        white-space: nowrap;
        width: 100%;
    }

    .pagination {
        margin-top: 15px;
    }
</style>
