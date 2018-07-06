<template>
  <div id="app">
	  <!-- <router-link to="/login">login</router-link> -->
    <transition name="router-fade">
		<keep-alive>
			<router-view v-if="$route.meta.keepalive"></router-view>
		</keep-alive>
    </transition>
	<transition name="router-fade">
		<router-view v-if="!$route.meta.keepalive"></router-view>
	</transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common'
// name+enter进入的那一瞬间
// name+enter-active 会在进入的整个过程里,完全进入后会移除这个类名
.router-fade-enter-active 
	transition opacity 3s
	
.router-fade-enter
	opacity 0

.router-fade-leave-active
	transition opacity 3s

.router-fade-leave-to
	opacity 0




</style>
