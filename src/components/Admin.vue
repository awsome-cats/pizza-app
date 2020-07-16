<template>
  <div class="admin_wrapper">
    <div class="current_user_wrapper">
      <span>Logged in as: </span>
      {{currentUser}}
      <button type="button" class="btn_red" @click.prevent="signOut">サインアウト</button>
    </div>
    <!-- form -->
    <NewPizza/>
    <!-- form -->
    <div class="menu_wrapper">
      <h3>メニュー:</h3>
      <table>
        <thead>
          <tr>
            <th>商品</th>
            <th>メニューから削除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button type="button" class="btn_red">
                &times;
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="orders_wrapper">
      <h3>Current orders ({{numberOfOrders}}):</h3>
      <table>
        <thead>
          <tr>
            <th>商品</th>
            <th>サイズ</th>
            <th>数量</th>
            <th>価格</th>
          </tr>
        </thead>
        <tbody>
          <tr class="order_number">
            <th colspan="4">
              <strong>注文数: 4</strong>
              <button type="button" class="btn_red">&times;</button>
            </th>
          </tr>
          <tr>
            <td>Margatita</td>
            <td>9"</td>
            <td>2</td>
            <td>$13</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- login -->
    <login/>
    <!-- login -->
  </div>
</template>

<script>
import addNewPizza from './NewPizza'
import Login from './Login'
export default {
  name: 'admin',
  components: {
    NewPizza: addNewPizza,
    Login
  },
  data() {
    return {
      name: 'kenny'
    }
  },
  computed: {
    getMenuItems () {
      return this.$store.getters.getMenuItems
    },
    numberOfOrders() {
      return this.$store.getters.numberOfOrders
    },currentUser() {
      return this.$store.getters.currentUser
    }
  },
  // コンポーネントナビゲーション
  // /adminに遷移した時の処理
  // 別の方法としてはroutes.jsに処理をかく
  // beforeRouteEnter(to, from, next) {
  //   // vmに置き換えることでnameにアクセスできる
  //   next(vm => {
  //     alert(`Hi, ${vm.name}`)
  //   })
  // },
  methods: {
    async signOut () {
     this.$store.dispatch('signOut')
    }
  }
}
</script>

<style scoped>
.admin_wrapper {
  margin: 10px;
}
.current_user_wrapper,
.order_wrapper,
.menu_wrapper {
  margin: 10px 0;
  padding: 10px;
  border: solid 1px #f79e38;
}
table {
  text-align: left;
  width: 70vw;
}
.order_number th {
  background: #ddd;
}
.order_number button {
  margin: 0 10px;
}

</style>