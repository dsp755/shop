<template>
  <div>
    <div class="menu">
      <router-link
        to="/"
        class="menu__item"
        style="font-weight: 900; font-size: 46px"
        >THE USNEAKERS</router-link
      >
      <nav>
        <router-link class="menu__item" to="/">new</router-link>
        <router-link class="menu__item" :to="{ name: 'products' }"
          >all sneakers
        </router-link>
        <router-link class="menu__item" :to="{ name: 'cart' }"
          >cart
          <span v-show="$store.cart.items.length !== 0"
            >: {{ $store.cart.items.length }}</span
          ></router-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 60px;
  background: #e9c46a;
  width: 100%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 25px;
  z-index: 1;
}

.menu__item {
  margin: 20px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}
</style>
