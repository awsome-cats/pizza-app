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
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signIn() {
      const userData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signIn', userData)
    }
  }
}
</script>

<style>

</style>