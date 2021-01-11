<template>
  <div class="header__button-wrapper">
    <button v-if="!products.length" class="header__button cart flex align disabled">
      <svg width="21" height="20">
        <use href="~@/assets/img/sprite.svg#cart"></use>
      </svg>
      <span class="header__button-text">Пусто</span>
    </button>
    <button
        v-else
        class="header__button cart flex align active"
        @click="isOpen = !isOpen"
    >
      <svg width="21" height="20">
        <use href="~@/assets/img/sprite.svg#cart"></use>
      </svg>
      <span class="header__button-text">{{ products.length }} товара</span>
    </button>
    <div class="cart-popup" :class="{ active: isOpen }">
      <ul class="cart-popup__list">
        <li
            class="cart-popup__item flex align"
            v-for="({ title, price, imageUrl }, index) in products"
            :key="index"
        >
          <button class="cart-popup__item-del">
            <img src="~@/assets/img/cross-small.svg" alt="Delete product">
          </button>
          <div class="cart-popup__item-img">
            <img :src="imageUrl" :alt="title">
          </div>
          <div class="cart-popup__item-title">
            {{ title }}
          </div>
          <div class="cart-popup__item-consider">
            1,5 кг х <span>{{ price }} руб.</span>
          </div>
          <div class="cart-popup__item-price">300 руб.</div>
        </li>
      </ul>
      <div class="cart-popup__footer">
        <div class="cart-popup__footer-total">Итого: {{ getTotalPrice }} руб.</div>
        <button class="cart-popup__button def-btn">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "gcCart",
  data: () => ({
    isOpen: false
  }),
  computed: {
    ...mapGetters('cart', {
      products: 'items'
    }),
    getTotalPrice() {
      return this.products.reduce((s, i) => s + i.price, 0)
    }
  },
  created() {
    const onClickOutside = e => this.isOpen = this.$el.contains(e.target) && this.isOpen;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  }
}
</script>
