<template>
    <div>
        <comment-form @addComment="addComment" ></comment-form>
        <comment-list :list="list"></comment-list>
        <pagination :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage"></pagination>
    </div>
</template>

<script>
import CommentForm from '@/views/CommentForm'
import CommentList from '@/views/CommentList'
import Pagination from '@/views/Pagination'
export default {
    data (){
        return{
            // totalData 所有的数据 =>当前页的评论 list
            list:[],
            // Pagination组件无法独立，list
            pagesize:3,
            totalData:[],
            totalCount:0,
            currentPage:1
        }

    },
    components:{
        CommentForm,
        CommentList,
        Pagination
    },
    methods:{
        addComment(msg){
            this.totalData.unshift({text:msg});
            this.totalCount = this.totalData.length;
            if (this.totalCount <= this.pagesize) {
                this.list = this.totalData;
            } else {

                this.list=this.totalData.slice(0,this.pagesize);
            }
            this.currentPage = 1;
        },
        turnPage(curr){
            this.currentPage=curr;
            this.list=this.totalData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
            console.log(this.list)
             
        }
    }
}
</script>

<style>

</style>
