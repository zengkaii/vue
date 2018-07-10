import * as types from './mutation-type'
export default {
    [types.ADD_TOTAL_TIME] (state, time) {
        state.totalTime = state.totalTime + ~~time;
    },
    [types.DEC_TOTAL_TIME] (state, time) {
        state.totalTime = state.totalTime - time;
    },
    [types.DELETE_PLAN] (state, idx) {
        state.list.splice(idx, 1);
    },
    [types.SAVE_PLAN] (state, plan) {
        const avatar = 'https://wx.qlogo.cn/mmhead/Q3auHgzwzM6Hjm96EFvdvxbTDQshgC1vp34VhzFtEXibTyrGq35PNzA/64';
        state.list.push(
            Object.assign({name:'zk',avatar:avatar},plan)
        )
    }
}