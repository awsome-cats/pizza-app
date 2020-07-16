<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
// import Home from './components/Home'
// import Menu from './components/Menu'
// import Admin from './components/Admin'
export default {
  name: 'App',
  components: {
    appHeader: Header,
    // home: Home,
    // Menu,
    // Admin
  }
}
</script>

<style>
  body {
    font-family: 'Crimson Text';
    margin: 0;
    font-size: 1.5em;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 10px 0;
    background: #f1e6da;

  }
  li {
    list-style: none;
  }

  span {
    margin: 0 10px;
  }
</style>
