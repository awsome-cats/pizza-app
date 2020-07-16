<template>
  <div class="about_wrapper">
    <h3>その他のinfoについてはリンクをクリックしてください</h3>
    <nav>
      <ul>
        <router-link :to="{ name: 'historyLink' }" tag="li">
          <a class="nav-link">私たちのこれまで</a>
        </router-link>
        <span>~</span>
        <router-link :to="{ name: 'orderingGuideLink' }" tag="li">
          <a class="nav-link">注文ガイド</a>
        </router-link>
        <span>~</span>
        <router-link :to="{ name: 'deliveryLink' }" tag="li">
          <a class="nav-link">デリバリー</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>

.about_wrapper {
  height: 200vh;
}
h3 {
  text-align: center;
}

</style>