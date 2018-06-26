<template>
    <button @click="handleClick" class="el-button" :type="nativeType" 
    :class = "[type?'el-button--' + type:'',
    {'is-disabled':buttonDisabled,'isloading':loading},size?'el-button--' + size:''
    ]" 
    :disabled="buttonDisabled">
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
            },
            nativeType:{
                type:String,
                default:''
            },
            size:{
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
            handleClick(evt){
                // console.log(evt);
                this.$emit('click',evt);
            }
        }

    }
</script>

<style>
    
</style>
