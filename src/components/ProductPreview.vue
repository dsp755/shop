<template>
  <div>
    <router-link :to="{ name: 'products' }">
      <div class="product-card -shadow">
        <img
          class="image-small"
          :src="img(product.tempImage)"
          @mouseover="product.tempImage = `${product.id}${product.id}`"
          @mouseleave="product.tempImage = `${product.id}`"
          @click="$store.selectedProduct = product.id"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data() {
    return {
      img: function(id) {
        return require(`@/assets/sneakers_${id}.png`)
      }
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
.product-card {
  width: 190px;
  height: 190px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}

.image-small {
  width: 100%;
  z-index: 0;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.product-card > .title {
  margin: 0;
}

.product-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
