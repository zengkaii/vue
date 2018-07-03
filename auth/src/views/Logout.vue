<template>
    <div>
        <form @submit.prevent="logout">
            <button type="submit">退出</button>
        </form>
    </div>
</template>

<script>
export default {
    methods:{
        logout(){
            localStorage.removeItem('token')
             this.$router.replace(this.$route.query.redirect || '/')
        }
    }
}
</script>

<style>

</style>
