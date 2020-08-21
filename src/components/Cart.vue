<template>
  <div style="padding-top: 100px">
    <div class="wrapper">
      <div v-show="totalPrice($store.cart.items) !== 0" class="cart">
        <div
          class="cart__item"
          v-for="item in $store.cart.items"
          :key="item.id"
        >
          <img class="cart__image -shadow" :src="img(item.tempImage)" />
          <p style="margin-left: 25px; width: 200px">{{ item.name }}</p>
          <p style="margin-left: 25px">PRICE: ${{ item.price }}</p>
        </div>
      </div>
      <div class="checkout">
        <div v-show="totalPrice($store.cart.items) !== 0">
          TOTAL PRICE ${{ totalPrice($store.cart.items) }}
        </div>
        <p v-show="totalPrice($store.cart.items) === 0">
          NO PRODUCTS IN CART
        </p>
      </div>
    </div>
    <div class="bottom-text">
      <p>
        The USneaker Shop ® All rights reserved. email: info@usneakershop.com
        Our support team hours are: Monday–Friday 10am–9pm EST Saturday-Sunday
        10am–6pm EST
      </p>
    </div>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService.js'
export default {
  data() {
    return {
      img: function(id) {
        return require(`@/assets/sneakers_${id}.png`)
      }
    }
  },
  created() {
    ProductService.getProducts()
      .then(res => {
        this.products = res.data
      })
      .catch(err => console.log('There was an ERROR' + err.response))
  },
  methods: {
    totalPrice(array) {
      let result = 0
      for (let item of array) {
        result += item.price
      }
      return result
    }
  }
}
</script>

<style>
html {
  background-color: #264653;
  color: white;
}
</style>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
}

.cart {
  display: flex;
  flex-direction: column;
  background: #e9c46a;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 50px;
  min-width: 500px;
}

.cart__item {
  display: flex;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 15px;
  color: black;
}

.cart__image {
  height: auto;
  width: auto;
  max-width: 100px;
  max-height: 100px;
  border-radius: 3px;
  cursor: pointer;
}

.checkout {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  min-width: 800px;
  min-height: 500px;
  font-size: 60px;
}

.bottom-text {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  color: white;
  text-align: center;
  border-top: solid #e9c46a;
}
</style>
