<template>
  <div id="app">
	<el-form :rules="rules" :model="activity" :inline="true" labelPosition="left" ref="ruleForm">
		<el-form-item label="活动名称" prop="name">
			<el-input v-model="activity.name"></el-input>
		</el-form-item>
		<a @click.prevent="submitForm('ruleForm')" class="el-button el-button--primary">立即创建</a>
	</el-form>
  </div>
</template>

<script>
import ElForm from "@/components/ElForm";
import ElFormItem from "@/components/ElFormItem";
import ElInput from "@/components/ElInput"
export default {
  name: 'App',
  data () {
	return {
		activity: {
			name: ''
		},
		rules: {
			name: [
				{
					required: true,
					message: '请输入活动名称'
				}
			]
		}
	}
  },
  components: {
	  ElForm,
	  ElFormItem,
	  ElInput
  },
  methods: {
	  submitForm (formName) {
		  			  console.log(this.$refs)
		  this.$refs[formName].validate((valid) => {

		  })
	  }
  }
}
</script>

<style>
</style>
