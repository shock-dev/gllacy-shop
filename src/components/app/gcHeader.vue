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
              <router-link class="menu__link" to="#">Каталог</router-link>
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
          <button class="header__button search">
            <svg width="17" height="17">
              <use href="~@/assets/img/sprite.svg#search"></use>
            </svg>
          </button>
          <button class="header__button login flex align">
            <svg width="21" height="19">
              <use href="~@/assets/img/sprite.svg#login"></use>
            </svg>
            <span class="header__button-text">Вход</span>
          </button>
          <button class="header__button cart flex align">
            <svg width="21" height="20">
              <use href="~@/assets/img/sprite.svg#cart"></use>
            </svg>
            <span class="header__button-text">Пусто</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "gcHeader"
}
</script>
