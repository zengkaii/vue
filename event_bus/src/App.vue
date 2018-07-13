<template>
  <div id="app">
    <p>
      FullName:{{fullName}}
    </p>
    <p>
      FirstName: <input type="text" v-model="firstName"/>
    </p>
	<p>obj.a:{{obj.a}}</p>
	<p>obj.a <input type="text" v-model="obj.a"/></p>
    <!-- <articles></articles> -->
    <main-component></main-component>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent'

export default {
  name: 'App',
  data () {
      return {
        firstName: '凯',
		lastName: '曾',
		fullName: '',
		obj: {
			a: 123
		}
      }
  },
  watch:{
	  firstName: {
		  handler(newName,oldName){
			  this.fullName = newName + '·' + this.lastName
		  },
		  immediate:true,
	  },
	  obj:{
		  handler (newName, oldName) {
			  console.log('obj.a changed')
		  },
		  immediate:true,
		  deep:true
	  }
    // firstName (newName, oldName) {
	// 	// console.log(newName, oldName);
	// 	this.fullName = newName + '·' + this.lastName
    // }
  },
//   computed:{
//     fullName () {
// 		return `${this.firstName}·${this.lastName}`
//     }
//   },
  components: {
    MainComponent
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
