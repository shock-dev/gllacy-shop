<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list flex">
      <li class="breadcrumbs__item">
        <router-link class="breadcrumbs__link" :to="{ name: 'Home' }">Главная</router-link>
      </li>
      <li class="breadcrumbs__item">
        <router-link class="breadcrumbs__link" :to="{ name: 'Catalog' }">Каталог</router-link>
      </li>
      <li class="breadcrumbs__item">
        <router-link class="breadcrumbs__link" to="#">Сливочное</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "gcBreadcrumbs"
}
</script>
