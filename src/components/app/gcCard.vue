<template>
  <div class="card__wrapper">
    <router-link class="card" :class="{ hit }" to="#">
      <div class="card__image">
        <img class="card__hit" src="~@/assets/img/hit.svg" alt="hit">
        <img src="~@/assets/img/ice-cream-1.jpg" alt="Сливочно-клубничное с присыпкой из белого шоколада">
        <div class="card__price flex">
          <div class="card__price-num">355</div>
          <div class="card__price-rub">₽<span class="card__price-kg">/кг</span></div>
        </div>
      </div>
      <div class="card__title">Сливочно-клубничное с присыпкой из белого шоколада</div>
    </router-link>
    <button class="card__btn def-btn">Быстрый просмотр</button>
  </div>
</template>

<script>
export default {
  name: "gcCard",
  props: {
    hit: {
      type: Boolean,
      default: false
    }
  }
}
</script>
