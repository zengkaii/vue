<template>
    <div class="loginContainer">
        <head-top head-title="密码登录" goBack="true">
            <slot name="button"></slot>
        </head-top>
        <img :src="captchCodeImg" v-if="captchCodeImg">
    </div>
</template>

<script>
import { getcaptchas } from '@/api/getData'
import headTop from '@/components/headTop'
// 业务经验一:navigationBar的封装
// history title 居中 右边的buttons
export default {
    data(){
        return {
            captchCodeImg:'',
            codeNumber:null
        }
    },
    components:{
        headTop
    },
    methods:{
        async getCaptchCode () {
            const res = await getcaptchas();
            // console.log(res);
            this.captchCodeImg = res.code
        }
    },
    mounted () {
        this.getCaptchCode()
    }
}
</script>

<style>

</style>
