<template>
  <div class="header__button-wrapper cart">
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
      <span class="header__button-text">{{ getLengthOfProducts }}</span>
    </button>
    <div class="cart-popup" :class="{ active: isOpen }">
      <div class="cart-popup__wrapper">
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
            <div class="cart-popup__item-price">{{ getPriceByWeight(price) }} руб.</div>
          </li>
        </ul>
      </div>
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
      return this.products.reduce((s, i) => s + this.getPriceByWeight(i.price), 0)
    },
    getLengthOfProducts() {
      let length = this.products.length

      return length + ' ' + this.getNoun(length, 'продукт', 'продукта', 'продуктов')
    }
  },
  methods: {
    getPriceByWeight(price) {
      return price * 1.5
    },
    getNoun(number, one, two, five) {
      let n = Math.abs(number)

      n %= 100

      if (n >= 5 && n <= 20) return five

      n %= 10;

      if (n === 1) return one

      if (n >= 2 && n <= 4) return two

      return five
    }
  },
  created() {
    const onClickOutside = e => this.isOpen = this.$el.contains(e.target) && this.isOpen;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  }
}
</script>
