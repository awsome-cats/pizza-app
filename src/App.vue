<template>
  <div id="app">
    <app-header></app-header>
    <home></home>
    <Menu/>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    appHeader: Header,
    home: Home,
    Menu
  }
}
</script>

<style>

</style>
