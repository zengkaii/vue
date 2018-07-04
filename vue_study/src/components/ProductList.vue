<template>
    <ul>
        
        <li v-for="(product,index) in products" :key="index">{{product.title}} - {{ product.price | currency }}
        <br>
        <button @click="addProductToCart(product)" :disabled="!product.inventory">Add to cart</button>
        </li>
    </ul>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
export default {

    computed:mapState({
        products:state => state.products.all
    }),
    created () {
        this.$store.dispatch('getAllProducts');
    },
    methods:mapActions([
        'addProductToCart'
    ])

}
</script>

<style>

</style>
