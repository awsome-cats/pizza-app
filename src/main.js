import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import {store} from './store/index.js'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  // コンポーネントが遷移した際指定された位置に移動する
  // scrollBehavior() {
  //   return { x: 0, y: 200 }
  // },
  
  // selectorにスクロール移動する
  // scrollBehavior() {
  //   return { selector: '.basket' }
  // },
  
  // 引数を渡す
  // ブラウザーの戻るボタンで前のページに戻ったとしても前のスクロールの位置を記憶している
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   }else {
  //     return { x: 0, y: 0}
  //   }
  // },

  // コンポーネント間でページ遷移した際に同じスクロール位置で保存される
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash}
    }
  },
  mode: 'history'
})

// グローバルガード
// /menu以外は遷移できない
// router.beforeEach((to, from, next) => {
//   if(to.path === '/menu') {
//     next()
//   } else {
//     next(false)
//   }
// })

// 処理が行われたあと遷移する
// router.afterEach(() => {
//   alert('nav')
// })




new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
