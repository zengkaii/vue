<template>
  <div id="app">
    <header class="header headerFixed">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo" default-active="1">
          <el-menu-item>活动发布</el-menu-item>
          <el-menu-item>活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="main-right">
          <div class="activePublic">
            <el-steps :space="200" :active="step">
              <el-step title="活动信息"></el-step>
              <el-step title="报名签到" ></el-step>
              <el-step title="分享设置"></el-step>
              <el-step title="个性设置"></el-step>
            </el-steps>
            <div class="step1">
              <el-form class="demo-ruleForm" ref="ruleForm" label-position="top" :model="ruleForm">
                <el-form-item prop="name" label="活动名称">
                  <el-input v-model="ruleForm.name" size="larget"></el-input>
                </el-form-item>
                <el-form-item label="" prop="fenLei">
                  <el-row style="height:35px;" type="flex">
                    <el-col :span="3" style="width:90px;">
                      <div class="el-form-item__label">活动分类</div>
                    </el-col>
                    <el-col :span="2">
                      <el-button type="text" @click.prevent="dialogFormFenLeiVisble=true">设置</el-button>
                    </el-col>
                  </el-row>
                  <el-radio-group v-model="ruleForm.fenLei">
                    <el-radio v-for="item of ruleForm.fenleis" :key="item.name" :label="item.name"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
              <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisble">
                <el-form>
                  <el-form-item>
                    <el-tag v-for="fenLei of ruleForm.fenleis" type="primary" :key="fenLei.name"  @close="handleClose(fenLei)" closable>{{fenLei.name}}</el-tag>
                  </el-form-item>
                </el-form>

              </el-dialog>
            </div>
            <el-button-group>
              <el-button v-show="lastStep" type="primary" style="margin-top:12px" @click.native.prevent="last">上一步</el-button>
              <el-button v-show="nextStep" type="primary" style="margin-top:12px" @click.native.prevent="next">下一步</el-button>
              <el-button type="primary" style="margin-top:12px">发布活动</el-button>
            </el-button-group>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
          step:2,
          lastStep:true,
          nextStep:true,
          dialogFormFenLeiVisble:false,
          ruleForm:{
            name:'',
            fenleis:[
              {
                name:'未发布'
              },
              {
                name:'测试活动'
              },
              {
                name:'精彩活动'
              }
            ],
            fenLeis:'测试活动',
            tags:[]
          }
    }
  },
  components: {
  },
  mounted () {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
  },
  methods:{
    handleClose(tag){
      console.log(this.ruleForm.fenleis)
      this.ruleForm.fenleis.splice(this.ruleForm.fenleis.indexOf(tag), 1);

    },
    next(){
      // if(this.step>=3){
      //   this.nextStep=false
      // }
      this.step++;
      this.goStep(this.step);
        
    },
    last(){

      this.step--;
      this.goStep(this.step);
    },
    goStep(n){
      switch(n){
        case 1:
        this.lastStep=false
        this.nextStep=true
        break;
        case 2:
        this.lastStep=true
        this.nextStep=true
        break;
        case 3:
        this.lastStep=true
        this.nextStep=true
        break;
        case 4:
        this.lastStep=true
        this.nextStep=false
        break;
        

      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}
header {
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: 4px solid #3091f2;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
}
header.headerFixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header.el-menu-demo{
  padding-left: 300px!important;

}
main{
  margin-top: 60px;
  display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
main .el-menu{background-color: transparent!important;}

</style>
