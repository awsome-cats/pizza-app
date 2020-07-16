<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <div class="info_block_wrapper">
      <!-- 名前付きrouter-view routes.js -->
      <router-view name="ordering-guide"/>
      <router-view name="delivery"/>
      <router-view name="history"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
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

  .info_block_wrapper {
    display: flex;
    flex-direction: column;
  }

  /*
    名前付きrouter-viewの対象のスタイリングが可能  
   */
  .info_block {
    background: #f1e6da;
    margin: 10px 0;
    padding: 10px;
  }

  .info_block h3 {
    text-align: center;
  }

  .info_block_content {
    display: flex;
    align-items: center;
  }
  /*
    media queryでもないのにwidthが画面サイズと比例して変化する
   */
  .info_block img {
    width: 30%;
  }

  @media screen and (min-width: 900px) {
    .info_block {
      width: 100%;
    }
    .info_block_wrapper {
      flex-direction: row;
    }
    .info_block:nth-child(2) {
      margin: 10px;
    }
    .info_block_content {
      flex-direction: column;
      align-items: center;
    }

    .info_block img {
      max-width: 100%;
    }
    /*
      交互にimgを表示する
     */
    .info_block:nth-child(2) img {
      order: -1;
    }
  }
</style>
