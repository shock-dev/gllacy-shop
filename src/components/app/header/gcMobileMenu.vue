<template>
  <div class="mobile-menu" :class="{ active: mobileMenu }">
    <button class="mobile-menu__cancel" @click="hideAll">
      <svg>
        <use href="~@/assets/img/sprite.svg#cancel"></use>
      </svg>
    </button>
    <ul class="mobile-menu__list">
      <li class="mobile-menu__list-item">
        <router-link class="mobile-menu__list-link" :to="{ name: 'Catalog' }">Каталог</router-link>
      </li>
      <li class="mobile-menu__list-item">
        <router-link  class="mobile-menu__list-link" :to="{ name: 'Catalog' }">Доставка и оплата</router-link>
      </li>
      <li class="mobile-menu__list-item">
        <router-link  class="mobile-menu__list-link" :to="{ name: 'Catalog' }">О Компании</router-link>
      </li>
    </ul>
    <form class="mobile-menu__form">
      <input class="mobile-menu__search" type="text" aria-label="Search something" placeholder="Крем-брюле">
      <button class="mobile-menu__form-btn">
        <svg>
          <use href="~@/assets/img/sprite.svg#search"></use>
        </svg>
      </button>
    </form>
    <button class="mobile-menu__login header__button login flex align" @click="openLoginForm">
      <svg width="21" height="19">
        <use href="~@/assets/img/sprite.svg#login"></use>
      </svg>
      <span class="header__button-text">Вход</span>
    </button>
    <div class="mobile-menu__info header__info flex">
      <p class="header__date">С 10 до 20, ежедневно</p>
      <p class="header__phone">8 812 450-25-25</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "gcMobileMenu",
  computed: {
    ...mapGetters(['mobileMenu'])
  },
  methods: {
    ...mapMutations(['hideAll', 'toggleLoginForm', 'toggleOverlay']),
    openLoginForm() {
      this.hideAll()

      setTimeout(() => {
        this.toggleOverlay()
        this.toggleLoginForm()
      }, 300)
    }
  }
}
</script>
