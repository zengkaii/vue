<template>
    <div>
        <comment-item v-for="(item,index) in list" :key="index" :content="item"></comment-item>
        <div v-if="this.list.length==0" class="empty-msg">评论空空如也</div>
    </div>
</template>

<script>
import CommentItem from '@/views/CommentItem'
export default {
    props :{
        'list':Array
    },
    components:{
        CommentItem
    }
}
</script>

<style>

</style>
