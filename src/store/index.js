import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
    // Декомпозировать логику vuex store
    modules: {
        todo
    }
})