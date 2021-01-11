<template>
  <div class="sort__col-box type">
    <button
        class="type__button"
        :class="{ active: isOpen }"
        @click="isOpen = !isOpen"
    >
      По популярности
    </button>
    <ul class="type__list" :class="{ active: isOpen }">
      <li class="type__item">
        <router-link class="type__link" to="#">По цене</router-link>
      </li>
      <li class="type__item">
        <router-link class="type__link" to="#">По алфавиту</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "gcSortType",
  data: () => ({
    isOpen: false
  }),
  created() {
    const onClickOutside = e => this.isPopupActive = this.$el.contains(e.target) && this.isPopupActive;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  },
}
</script>
