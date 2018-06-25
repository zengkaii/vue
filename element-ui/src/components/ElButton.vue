<template>
    <button class="el-button" 
    :class = "[type?'el-button--' + type:'',
    {'is-disabled':buttonDisabled}
    ]"
    :disabled="buttonDisabled" @click="handleChange">
        <i class="el-icon-loading" v-if="loading"></i>
        <i v-if='icon&&!loading' :class="icon"></i>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name:'ElButton',
        props: {
            disabled: Boolean,
            type: {
                type:String,
                default:'default'
            },
            loading:Boolean,
            icon:{
                type:String,
                default:''
            }
        },
        computed: {
            buttonDisabled() {
                return this.disabled;
            }
        },
        methods: {
            handleChange () {
                this.$emit('change', this.loading)
            }
        }

    }
</script>

<style>
    
</style>
