<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/">/</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/dashboard">/dashboard</router-link>
    <router-link v-if="login" to="/login">/login</router-link>
    <router-link v-if="!login" to="/logout">/logout</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  // name: 'App'
  data(){
    return {
      login:true
    }
  },
  beforeUpdate(){
    console.log(localStorage.token)
    if(localStorage.token){
      this.login=false
    } else{
      this.login =true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
