import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
    // Декомпозировать логику vuex store
    modules: {
        post
    }
})