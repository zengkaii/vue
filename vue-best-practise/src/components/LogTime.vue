<template>
    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-6">
                <label>日期</label>
                <input type="date" class="form-control" v-model="date" placeholder="Date"/>
            </div>
            <div class="col-sm-6">
                <label>时间</label>
                <input type="number" class="form-control" v-model="totalTime" placeholder="Hours"/>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label>备注</label>
                <input type="text" class="form-control" v-model="comment" placeholder="Comment"/>
            </div>
        </div>
        <button class="btn btn-primary" @click="save()">保存</button>
        <router-link class="btn btn-danger" to="/time-entries">取消</router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            date: '',
            totalTime: '',
            comment: ''
        }
    },
    methods: {
        save () {
            const plan = {
                name: 'zk',
                image: 'https://wx.qlogo.cn/mmhead/Q3auHgzwzM6Hjm96EFvdvxbTDQshgC1vp34VhzFtEXibTyrGq35PNzA/64',
                date: this.date,
                totalTime: this.totalTime,
                comment: this.comment
            };
            this.$store.dispatch('savePlan',plan)
            this.$store.dispatch('addTotalTime', this.totalTime)
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>
