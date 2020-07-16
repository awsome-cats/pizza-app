import { firestoreAction } from 'vuexfire'
import { dbMenuRef } from '../../firebase'

const state = {
  menuItems: []
}
const getters = {
  getMenuItems(state) {
    return state.menuItems
  }
}
const mutations = {}
const actions = {
  setMenuRef: firestoreAction(context => {
    return context.bindFirestoreRef('menuItems', dbMenuRef)
  }),
  async addMenuItem(context, pizza){
    try {
      await dbMenuRef.add(pizza)
    }catch(e) {
      alert(e.message)
    }
  },
  async removeMenuItem(context, id) {
    try {
      const item = await dbMenuRef.doc(id)
      item.delete()
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