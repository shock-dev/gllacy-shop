<template>
  <header class="header">
    <div class="header__top flex align between">
      <div class="header__left flex align">
        <router-link :to="{ name: 'Home' }" class="header__logo">
          <img src="~@/assets/img/logo.svg" alt="Logo">
        </router-link>
        <nav class="header__nav menu">
          <ul class="menu__list flex align">
            <li class="menu__item">
              <router-link class="menu__link" :to="{ name: 'Catalog' }" active-class="active">Каталог</router-link>
            </li>
            <li class="menu__item">
              <router-link class="menu__link" to="#">Доставка и оплата</router-link>
            </li>
            <li class="menu__item">
              <router-link class="menu__link" to="#">О Компании</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__right">
        <div class="header__buttons flex align">
          <gc-search-form/>
          <gc-login-form/>
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
            >
              <svg width="21" height="20">
                <use href="~@/assets/img/sprite.svg#cart"></use>
              </svg>
              <span class="header__button-text">{{ products.length }} товара</span>
            </button>
            <div class="cart-popup" :class="{ active: isCartOpen }">
              <ul class="cart-popup__list">
                <li class="cart-popup__item flex align">
                  <button class="cart-popup__item-del">
                    <img src="~@/assets/img/cross-small.svg" alt="Delete product">
                  </button>
                  <div class="cart-popup__item-img">
                    <img src="~@/assets/img/ice-cream-1.jpg" alt="">
                  </div>
                  <div class="cart-popup__item-title">
                    Пломбир с апельсиновым джемом
                  </div>
                  <div class="cart-popup__item-consider">
                    1,5 кг х <span>200 руб.</span>
                  </div>
                  <div class="cart-popup__item-price">300 руб.</div>
                </li>
                <li class="cart-popup__item flex align">
                  <button class="cart-popup__item-del">
                    <img src="~@/assets/img/cross-small.svg" alt="Delete product">
                  </button>
                  <div class="cart-popup__item-img">
                    <img src="~@/assets/img/ice-cream-1.jpg" alt="">
                  </div>
                  <div class="cart-popup__item-title">
                    Пломбир с апельсиновым джемом
                  </div>
                  <div class="cart-popup__item-consider">
                    1,5 кг х <span>200 руб.</span>
                  </div>
                  <div class="cart-popup__item-price">300 руб.</div>
                </li>
              </ul>
              <div class="cart-popup__footer">
                <div class="cart-popup__footer-total">Итого: 750 руб.</div>
                <button class="cart-popup__button def-btn">Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom flex">
      <div class="header__info flex">
        <p class="header__date">С 10 до 20, ежедневно</p>
        <p class="header__phone">8 812 450-25-25</p>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import GcSearchForm from "@/components/app/header/gcSearchForm";
import GcLoginForm from "@/components/app/header/gcLoginForm";

export default {
  name: "gcHeader",
  components: {
    GcLoginForm,
    GcSearchForm
  },
  computed: {
    ...mapGetters('cart', {
      products: 'items'
    })
  }
}
</script>
