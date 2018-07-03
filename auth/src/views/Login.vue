<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <label>
                <input type="text" v-model="email" placeholder="email"/>
            </label>
            <label>
                <input type="password" v-model="pass" placeholder="password"/>
            </label>
            <button type="submit">Login</button>
            login 已完成 ，再来login 跳转到首页
            logout 退出 清空token
        </form>
    </div>
</template>

<script>
import auth from '@/auth.js'
export default {
    data () {
        return {
            email:'1965599425@qq.com',
            pass:''
        }
    },
    mounted (){
        // console.log(this.$route.query.redirect)
        if(localStorage.token){
            
        }
    },
    methods:{
        login () {
            auth.login(this.email,this.pass, (loggedIn)=> {
                // console.log(loggedIn);
                if(loggedIn){
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            })
        }
    }
}
</script>

<style>

</style>
