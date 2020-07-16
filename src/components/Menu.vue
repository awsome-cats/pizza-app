<template>
  <div class="menu_wrapper">
    <!-- menu -->
    <div class="menu">
      <h3>~ Authentic handmade pizza ~</h3>
      <table v-for="item in getMenuItems" :key="item.id">
        <tbody>
          <tr>
            <td>
              <strong>~ {{ item.name }} ~</strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>{{ item.description }}</small>
            </td>
          </tr>
          <tr v-for="(option, index) in item.options" :key="option[index]">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td>
              <button 
              type="button" 
              class="btn_green"
              @click="addToBasket(item, option)" >+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- shopping basket -->
    <div class="basket">
      <h3>~ カート ~</h3>
      <div v-if="basket.length > 0">
        
        <table>
          <tbody v-for="(item, index) in basket" :key="index">
            <tr>
              <td>
                <button class="btn_green" @click="decreaseQuantity(item)">&#8722;</button>
                <span>{{ item.quantity }}</span>
                <button class="btn_green" @click="increaseQuantity(item)">&#43;</button>
              </td>
              <td>{{ item.name }} {{item.size}}</td>
              <td>${{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        
        <p>Order total: {{ total }}</p>
        <button @click="addNewOrder" class="btn_green" >Place Order</button>
      </div>
      <div v-else>
        <p>{{  basketText }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'menu',
  data() {
    return {
      basket: [],
      basketText: "カートは空です",
      
    };
  },
  computed: {
    getMenuItems () {
      return this.$store.getters.getMenuItems
    },
    total() {
      let totalCost = 0
       this.basket.map(item => {
        totalCost+= item.quantity * item.price
      })
      return totalCost
    }
  },
  methods: {
    async addToBasket(item, option) {
      const pizzaExists = await this.basket.find(pizza => {
        return pizza.name === item.name && pizza.size == option.size
      })

      if(pizzaExists) {
        pizzaExists.quantity++
        return 
      }
      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      })
    },
    removeBasket(item) {
      this.basket.splice(this.basket.indexOf(item), 1)
    },
    decreaseQuantity(item) {
      item.quantity--
      if (item.quantity === 0) {
        this.removeBasket(item)
      }
    },
    increaseQuantity(item) {
      item.quantity++
      
    },
    addNewOrder() {
      const order = {
        pizzas: { ...this.basket },
        createdAt: new Date(),
      }
      // this.$store.commit('addOrder', this.basket)
      this.$store.dispatch('addNewOrder', order)
      this.basket = []
      this.basketText = 'ありがとうございます'
    }
  },
    
  
};
</script>

<style scoped>
h3 {
  text-align: center;
}
.menu_wrapper {
  display: flex;
  flex-direction: column;
}
.menu,
.basket {
  background: #f1e6da;
  border-radius: 3px;
  height: 100vh;
  margin: 10px;
  padding: 10px;
}
@media screen and (min-width: 900px) {
  .menu_wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .menu {
    width: 65vw;
  }
  .basket {
    width: 35vw;
  }
}
</style>