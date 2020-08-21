<template>
  <div class="wrapper">
    <transition name="fade" appear>
      <div @click="showCart = !showCart" v-show="showCart" class="darken"></div>
    </transition>
    <div v-show="showCart" class="cart-wrapper">
      <div v-show="showCart" class="cart">
        <div class="cart__text-container">
          <p v-show="totalPrice($store.cart.items) !== 0" class="cart__text">
            TOTAL PRICE ${{ totalPrice($store.cart.items) }}
          </p>
          <p v-show="totalPrice($store.cart.items) === 0" class="cart__text">
            THE CART IS EMPTY
          </p>
          <router-link
            v-show="totalPrice($store.cart.items) !== 0"
            class="cart__text"
            :to="{ name: 'cart' }"
            >GO TO CART</router-link
          >
        </div>
        <div
          class="cart__item"
          v-for="item in $store.cart.items"
          :key="item.id"
        >
          <img
            class="cart__image -shadow"
            :src="img(item.tempImage)"
            @click="$store.selectedProduct = product.id"
          />
          <p style="margin-left: 25px; width: 200px">{{ item.name }}</p>
          <p style="margin-left: 25px">PRICE: ${{ item.price }}</p>
        </div>
      </div>
    </div>
    <nav class="products">
      <div v-for="product in products" :key="product.id">
        <img
          class="products__image"
          :src="img(product.tempImage)"
          @click="$store.selectedProduct = product.id"
        />
      </div>
    </nav>
    <div class="products__card">
      <div class="image-container -shadow">
        <img
          class="image-container__image"
          :src="img(products[$store.selectedProduct - 1].id)"
        />
      </div>
      <div class="description-container">
        <div class="product-text">
          <p class="product-name">
            {{ products[$store.selectedProduct - 1].name }}
          </p>
          <p class="description-container__text">
            {{ products[$store.selectedProduct - 1].description }}
          </p>
          <p style="font-size: 20px; font-weight: bold">
            ${{ products[$store.selectedProduct - 1].price }}
          </p>
        </div>
        <div class="buttons-block">
          <div
            class="buttons-block__button"
            v-if="
              !$store.cart.items.includes(
                $store.cart.items.find(
                  item => item.id === $store.selectedProduct
                )
              )
            "
            @click="
              $store.cart.add(products[$store.selectedProduct - 1])
              showCart = !showCart
            "
          >
            Add to cart
          </div>
          <div class="buttons-block__button-off" v-else>Already in cart</div>
          <div
            class="buttons-block__button"
            @click="
              $store.cart.remove(products[$store.selectedProduct - 1])
              showCart = !showCart
            "
          >
            Remove from cart
          </div>
        </div>
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
      showCart: false,
      products: [],
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
}
</style>

<style lang="scss" scoped>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}

.wrapper {
  background: #264653;
  color: white;
}

.cart-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vw;
}

.cart {
  top: 150px;
  position: absolute;
  background: #e9c46a;
  width: 600px;
  border: solid white;
  border-radius: 5px;
  z-index: 2;
}

.cart__text-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  border-bottom: solid white 3px;
}

.cart__text {
  color: white;
  text-decoration: none;
  text-align: center;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
}

.products {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 200px;
  background: rgb(246, 246, 246);
}

.products__card {
  display: flex;
  flex-direction: row;
}

.product-name {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 26px;
}

.product-text {
  height: 100px;
  width: 800px;
  margin-left: 20px;
  margin-top: 20px;
}

.description-container {
  margin-top: 40px;
  margin-left: 25px;
  margin-right: 10px;
}

.description-container__text {
  height: 120px;
}

.products__image {
  height: auto;
  width: auto;
  max-width: 100px;
  max-height: 100px;
  margin-top: 80px;
  cursor: pointer;
}

.image-container {
  height: auto;
  width: auto;
  max-width: 550px;
  max-height: 300px;
  margin-top: 60px;
  margin-left: 37px;
  border-radius: 10px;
}

.image-container__image {
  height: auto;
  width: auto;
  max-width: 550px;
  max-height: 300px;
}

.darken {
  position: absolute;
  height: 100vw;
  width: 100vw;
  background: black;
  opacity: 0.3;
  z-index: 1;
}

.buttons-block {
  display: flex;
  width: 600px;
  margin-top: 123px;
}

.buttons-block__button {
  cursor: pointer;
  outline: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  background: #e9c46a;
  width: 170px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;
}

.buttons-block__button-off {
  outline: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  background: #606060;
  width: 170px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 5px;
}

.bottom-text {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  color: white;
  margin-top: 70px;
  text-align: center;
  border-top: solid #e9c46a;
}

.cart__item {
  display: flex;
  font-weight: bold;
  color: black;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 50px;
}

.cart__image {
  height: auto;
  width: auto;
  max-width: 100px;
  max-height: 100px;
  border-radius: 3px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
