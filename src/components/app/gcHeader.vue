<template>
  <header class="header">
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
  </header>
</template>

<script>
export default {
  name: "gcHeader"
}
</script>
