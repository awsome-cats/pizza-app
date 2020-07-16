const state = {
  orders: [],
}
const getters = {
  numberOfOrders(state){
    return state.orders.length
  }
}
const mutations = {
  addOrder(state, payload){
    state.orders.push(payload)
  }
}

const actions = {}

export default {
  state,
  mutations,
  getters,
  actions
}