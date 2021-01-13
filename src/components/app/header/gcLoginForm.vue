<template>
  <div class="header__button-wrapper login">
    <button
        class="header__button login flex align"
        :class="{ active: isOpen }"
        @click="isOpen = !isOpen"
    >
      <svg width="21" height="19">
        <use href="~@/assets/img/sprite.svg#login"></use>
      </svg>
      <span class="header__button-text">Вход</span>
    </button>
    <div class="login-form" :class="{ active: isOpen }">
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
</template>

<script>
export default {
  name: "gcLoginForm",
  data: () => ({
    isOpen: false
  }),
  created() {
    const onClickOutside = e => this.isOpen = this.$el.contains(e.target) && this.isOpen;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  },
}
</script>
