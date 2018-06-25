<template>
  <div id="app">
    
    <el-button loading
    type="success">
      提交
    </el-button>

    <el-button 
    icon="el-icon-edit"
    v-on:click.native="change"
    type="primary"
    :loading=isLoading>
    </el-button>

    <el-button :disabled="disabled"
    type="info">
      提交
    </el-button>

    <el-button :disabled="disabled"
    type="warning">
      提交
    </el-button>

    <el-button :disabled="disabled"
    type="danger">
      提交
    </el-button>
  </div>
</template>

<script>
import ElButton from '@/components/ElButton'
export default {
  name: 'App',
  data () {
    return {
      isLoading: true,
      disabled: false
    }
  },
  components: {
    'el-button': ElButton
  },
  mounted () {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
  },
  methods:{
    change:function(){
      console.log('1111')
      this.isLoading=!this.isLoading;
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
