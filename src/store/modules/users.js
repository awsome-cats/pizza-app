
import { firebaseAuth} from '../../firebase'


const state = {
  currentUser: null
}
const getters = {
  currentUser(state){
    return state.currentUser
  }
}
const mutations = {
  userStatus(state, user){
    // if (user) {
    //   state.currentUser = user.email
    // }else {
    //   state.currentUser =null
    // }
    user === null
    ? state.currentUser = null
    : state.currentUser = user
  }
}
const actions = {
  async signIn({ commit}, payload){
    try {
      const userData = await firebaseAuth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      )
      commit('userStatus', userData)
    }catch(error) {
      const errorCode = error.code
      const errorMessage = error.message
      if(errorCode === 'auth/wrong-password') {
        alert('wrong password')
      }else {
        alert(errorMessage)
      }
      console.log(error)
    }
  },
    async signOut({ commit }){
    try {
      await firebaseAuth.signOut()
    }catch(error) {
      alert(`signOut${error}`)
    }
    commit('userStatus', null)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}