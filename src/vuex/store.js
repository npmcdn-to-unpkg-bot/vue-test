import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个对象来保存应用启动时初始状态
const state = {
    // TODO: 放置初始状态
    count: 0
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更
    INCREMENT (state, amout) {
        state.count = state.count + amout
    },
    DECREMENT (state, amout) {
        state.count = state.count - amout
    }
}

export default new Vuex.Store({
    state,
    mutations
})
