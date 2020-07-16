import { firestoreAction } from "vuexfire"
import { dbOrdersRef } from "../../firebase"

const state = {
  orders: [],
}
const getters = {
  numberOfOrders(state){
    return state.orders.length
  },
  getOrders(state) {
    return state.orders
  }
}
const mutations = {
  // addOrder(state, payload){
  //   state.orders.push(payload)
  // }
}

const actions = {
  setOrdersRef: firestoreAction(context => {
    return context.bindFirestoreRef('orders', dbOrdersRef.orderBy('createdAt'))
  }),
  addNewOrder: async (context, order) => {
    try {
      dbOrdersRef.add(order)
    }catch(e) {
      alert('すいません')
    }
  },
  removeOrder: async (context, id) =>{
    try {
      const order = await dbOrdersRef.doc(id)
      order.delete()

    }catch(e) {
      alert(e.message)
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}