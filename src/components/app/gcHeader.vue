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
          <div class="header__button-wrapper">
            <button
              @click="isSearchFormOpen = !isSearchFormOpen"
              class="header__button search"
            >
              <svg width="17" height="17">
                <use href="~@/assets/img/sprite.svg#search"></use>
              </svg>
            </button>
            <div class="search-form" :class="{ active: isSearchFormOpen }">
              <input class="search-form__field" type="text" aria-label="Search something" placeholder="Крем-брюле">
            </div>
          </div>
          <div class="header__button-wrapper">
            <button class="header__button login flex align" @click="isLoginFormOpen = !isLoginFormOpen">
              <svg width="21" height="19">
                <use href="~@/assets/img/sprite.svg#login"></use>
              </svg>
              <span class="header__button-text">Вход</span>
            </button>
            <div class="login-form" :class="{ active: isLoginFormOpen }">
              <input class="search-form__field" type="text" aria-label="email" placeholder="email@example.com">
              <input class="search-form__field" type="password" aria-label="password" placeholder="••••••••">
              <div class="login-form__footer flex">
                <button class="login-form__button def-btn">Войти</button>
                <div class="login-form__actions align">
                  <router-link class="login-form__action" to="#">Забыли пароль?</router-link>
                  <router-link class="login-form__action" to="#">Новая регистрация</router-link>
                </div>
              </div>
            </div>
          </div>
          <button class="header__button cart flex align">
            <svg width="21" height="20">
              <use href="~@/assets/img/sprite.svg#cart"></use>
            </svg>
            <span class="header__button-text">Пусто</span>
          </button>
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
export default {
  name: "gcHeader",
  data: () => ({
    isSearchFormOpen: false,
    isLoginFormOpen: false
  }),
  created() {
    const onClickOutside = e => this.isSearchFormOpen = this.$el.contains(e.target) && this.isSearchFormOpen;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  },
}
</script>
