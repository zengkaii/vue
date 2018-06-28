<template>
    <div>
        <el-col :span="24" class="pagination">
            <el-pagination layout="prev,pager,next" :current-page="currentPage" :page-size="pagesize" :total="totalCount" 
             @current-change="handleChangePage"
             style="float:right">

            </el-pagination>
        </el-col>
    </div>
</template>

<script>
export default {
    props:['totalCount','currentPage','pagesize'],
    methods:{
        handleChangePage(val){
            return this.$emit('turnPage',val);
            console.log(val)
        }
    }
}
</script>

<style>

</style>
