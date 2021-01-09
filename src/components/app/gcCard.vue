<template>
  <div class="card__wrapper">
    <router-link class="card" :class="{ hit }" to="#">
      <div class="card__image">
        <img class="card__hit" src="~@/assets/img/hit.svg" alt="hit">
        <img :src="imageUrl" :alt="title">
        <div class="card__price flex">
          <div class="card__price-num">{{ price }}</div>
          <div class="card__price-rub">₽<span class="card__price-kg">/кг</span></div>
        </div>
      </div>
      <div class="card__title">{{ title }}</div>
    </router-link>
    <button class="card__btn def-btn">Быстрый просмотр</button>
  </div>
</template>

<script>
export default {
  name: "gcCard",
  props: {
    title: String,
    price: Number,
    imageUrl: String,
    hit: {
      type: Boolean,
      default: false
    }
  }
}
</script>
