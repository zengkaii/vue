<template>
    <div>
        <a href="#" class="click" :data-index="index" @click.prevent="doClick($event)">点击我</a>
    </div>
</template>

<script>
export default {
    props:{
        index:Number
    },
    methods:{
        doClick(event){
                console.log(event.target.dataset.index)
        }
    }
}
</script>

<style>

</style>
