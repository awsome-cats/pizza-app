import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import order from './modules/order'
import users from './modules/users'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    menu,
    order,
    users
  }
  
})