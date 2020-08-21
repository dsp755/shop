<template>
  <div>
    <div class="wrapper">
      <div class="items-block">
        <div class="main-image-container">
          <img class="main-image-container__image" :src="this.mainImage" />
        </div>
        <div>
          <div class="selector">
            <div
              id="men"
              @click="showMenProducts"
              class="selector__button selected"
            >
              MEN'S
            </div>
            <div
              id="women"
              @click="showWomenProducts"
              class="selector__button"
              :to="{ name: 'Home' }"
            >
              WOMEN'S
            </div>
          </div>
          <div class="product-list">
            <ProductPreview
              v-show="showProd === 'men'"
              v-for="product in products.filter(el => {
                return el.sex === 'men'
              })"
              :key="product.id"
              :product="product"
            />
            <ProductPreview
              v-show="showProd === 'women'"
              v-for="product in products.filter(el => {
                return el.sex === 'women'
              })"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-text-container">
      <p>
        The USneaker Shop ® All rights reserved. email: info@usneakershop.com
        Our support team hours are: Monday–Friday 10am–9pm EST Saturday-Sunday
        10am–6pm EST
      </p>
    </div>
  </div>
</template>

<script>
import ProductPreview from '@/components/ProductPreview.vue'
import ProductService from '@/services/ProductService.js'

export default {
  name: 'MainImage',
  components: {
    ProductPreview
  },
  data() {
    return {
      showProd: 'men',
      mainImage: require('@/assets/main-page-image1.jpg'),
      products: []
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
    showMenProducts() {
      this.showProd = 'men'
      this.mainImage = require('@/assets/main-page-image1.jpg')
      document.getElementById('men').classList.add('selected')
      document.getElementById('women').classList.remove('selected')
    },
    showWomenProducts() {
      this.showProd = 'women'
      this.mainImage = require('@/assets/main-page-image2.jpg')
      document.getElementById('women').classList.add('selected')
      document.getElementById('men').classList.remove('selected')
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.items-block {
  display: flex;
  margin-top: 65px;
}

.main-image-container {
  width: 400px;
  margin-right: 70px;
  margin-left: -20px;
  margin-top: 70px;
}

.main-image-container__image {
  width: 100%;
}

.selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 180px;
  height: 120px;
  width: 100px;
}

.selector__button {
  font-weight: 600;
  font-size: 25px;
  color: rgb(103, 103, 103);
  text-decoration: none;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.selector__button:hover {
  color: rgb(191, 191, 191);
}

.selected {
  color: rgb(255, 255, 255);
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 490px;
  height: 490px;
  margin-left: 80px;
}

.bottom-text-container {
  font-size: 15px;
  color: white;
  margin-top: 45px;
  text-align: center;
  border-top: solid #e9c46a;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
