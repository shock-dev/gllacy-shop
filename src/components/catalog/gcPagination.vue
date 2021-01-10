<template>
  <div class="pagination flex">
    <button class="pagination__arrow pagination__arrow-left disabled">
      <svg width="8" height="14">
        <use href="~@/assets/img/sprite.svg#pagination-left-arrow"></use>
      </svg>
    </button>
    <ul class="pagination__list flex">
      <li class="pagination__item active">
        <router-link class="pagination__link" to="#">1</router-link>
      </li>
      <li class="pagination__item">
        <router-link class="pagination__link" to="#">2</router-link>
      </li>
      <li class="pagination__item">
        <router-link class="pagination__link" to="#">3</router-link>
      </li>
      <li class="pagination__item">
        <router-link class="pagination__link" to="#">4</router-link>
      </li>
    </ul>
    <button class="pagination__arrow pagination__arrow-right">
      <svg width="8" height="14">
          <use href="~@/assets/img/sprite.svg#pagination-right-arrow"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "gcPagination"
}
</script>
