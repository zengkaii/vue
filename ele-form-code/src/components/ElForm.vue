<template>
    <form form="el-form" :class="[labelPosition? 'el-form--label-' + labelPosition: '',{'el-form--inline':inline}]">
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'ElForm',
    componentName:'ElForm',
    data () {
        return {
            fields: []
        }
    },
    props: {
        model: Object,
        rules: Object,
        inline: Boolean,
        labelPosition:String
    },
    methods: {
        validate () {
            this.fields.forEach(field => {
                field.validate('',(message,filed) => {
                    
                })
            })
        }
    },
    created () {
        this.$on('el.form.addField', (filed) => {
            this.fields.push(filed);
        })
    }
}
</script>

<style>

</style>
