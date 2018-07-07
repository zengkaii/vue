<template>
    <div>
        
    </div>
</template>

<script>
import { cityGuess } from '@/api/getData'
export default {
    data(){
        return {
            geohash:''
        }
    },
    async beforeMount () {
        // 对比this.$route.pramas
        if (this.$route.query.geohash) {
            this.geohash = this.$route.query.geohash
        } else {
            const data = await cityGuess();
            // data.then()
            this.geohash = `${data.latitude},${data.longtitude}`
        }      
    }
}
</script>

<style>

</style>
