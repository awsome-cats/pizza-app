import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import order from './modules/order'
import users from './modules/users'
import { vuexfireMutations } from 'vuexfire'
Vue.use(Vuex)

export const store = new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    menu,
    order,
    users
  }
  
})