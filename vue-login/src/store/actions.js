import Vue from 'vue'
import api from '@/api'
import * as types from './types'
// commit mutaiton api设计的入口
export default {
    UserLogin({commit}, data) {
        commit(types.LOGIN, data)
    },
    UserLogout({commit}) {
        commit(types.LOGOUT)
    },
    UserName({commit}, data) {
        commit(types.USERNAME, data)
    }
}