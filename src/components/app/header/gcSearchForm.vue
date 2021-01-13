<template>
  <div class="header__button-wrapper search">
    <button
        class="header__button search"
        :class="{ active: isOpen }"
        @click="isOpen = !isOpen"
    >
      <svg width="17" height="17">
        <use href="~@/assets/img/sprite.svg#search"></use>
      </svg>
    </button>
    <div class="search-form" :class="{ active: isOpen }">
      <input class="search-form__field" type="text" aria-label="Search something" placeholder="Крем-брюле">
    </div>
  </div>
</template>

<script>
export default {
  name: "gcSearchForm",
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
