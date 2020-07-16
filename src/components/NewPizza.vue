<template>
  <form @submit.prevent="add">
    <h3>メニューを追加する</h3>
    <div class="form-group">
      <label for="name">商品名</label>
      <input type="text" id="name" v-model="newPizza.name">
    </div>
    <div class="form-group">
      <label for="description">詳細</label>
      <textarea v-model="newPizza.description" type="text" id="description"></textarea>
    </div>
    
    <p>
      <strong>オプション1:</strong>
    </p>
    <div class="form-group">
      <label for="size1">サイズ</label>
      <input v-model="newPizza.options[0].size" type="text" id="size1">
    </div>
    <div class="form-group">
      <label for="price1">価格</label>
      <input v-model="newPizza.options[0].price" type="text" id="price1">
    </div>
    
    <p>
      <strong>オプション2:</strong>
    </p>
    <div class="form-group">
      <label for="size2">サイズ</label>
      <input v-model="newPizza.options[1].size" type="text" id="size2">
    </div>
    <div class="form-group">
      <label for="price2">価格</label>
      <input v-model="newPizza.options[1].price" type="text" id="price2">
    </div>
    <button type="submit"  class="btn_green">追加</button>
   
  </form>
</template>

<script>
export default {
  name: 'addNewPizza',
  data () {
    return {
      newPizza: {
        'name': 'Eg. Margherita',
          'description': 'Eg. A delicious tomato based pizza topped with mozzarella',
          'options': [
            {
            'size': 9,
            'price': 6.95
            },
            {
              'size': 12,
              'price': 10.95
            }
          ]
      }
    }
  },
  // メニューを追加する
  methods: {
    add() {
      this.$store.dispatch('addMenuItem', this.newPizza)
    }
  }
}
</script>

<style>
.form-group {
  margin: 10px 0;
}
label {
  display: flex;
  margin: 0 0 10px 0;
}

input,
textarea {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  background: rgb(254, 254, 252);
  border: solid 1px #f79e38;
}

button {
  background: rgb(63, 145, 63);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}

</style>