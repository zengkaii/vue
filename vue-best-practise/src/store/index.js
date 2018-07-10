import Vue from 'vue'
import Vuex from 'vuex'
// import entries from './modules/entries'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
    totalTime: 0,
    list:[
        // {
        //     name:'zk',
        //     avatar:'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        //     plan:'吃饭'
        // }
    ]
}
export default new Vuex.Store({
    state,
    mutations,
    actions

})
