<template>
  <div class="login_wrapper">
    <form>
      <div>
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email">
      </div>
      <div class="">
        <label for="password">パスワード</label>
        <input v-model="password" type="password" id="password">
      </div>
      <button @click.prevent="signIn" id="button" class="btn_green">送信</button>
    </form>
  </div>
</template>

<script>
import { firebaseAuth } from '../firebase'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signIn() {
      try {
        await firebaseAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
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
    }
  }
}
</script>

<style>

</style>