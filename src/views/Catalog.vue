<template>
  <div class="catalog">
    <gc-breadcrumbs/>
    <div class="catalog__head flex align between">
      <h2 class="catalog__title">Сливочное мороженое</h2>
      <button class="catalog__btn-filter" @click="openSort">
        <svg>
            <use href="~@/assets/img/sprite.svg#filter"></use>
        </svg>
      </button>
    </div>
    <gc-sort/>
    <gc-products/>
    <gc-pagination/>
  </div>
</template>

<script>
import GcBreadcrumbs from "@/components/catalog/gcBreadcrumbs";
import GcSort from "@/components/catalog/gcSort";
import GcProducts from "@/components/catalog/gcProducts";
import GcPagination from "@/components/catalog/gcPagination";
import { mapMutations } from 'vuex'

export default {
  name: "Catalog",
  metaInfo: {
    title: 'Gllacy shop - catalog'
  },
  methods: {
    ...mapMutations(['toggleOverlay', 'toggleSort']),
    openSort() {
      document.body.classList.add('lock')
      this.toggleOverlay()
      this.toggleSort()
    }
  },
  components: {
    GcPagination,
    GcProducts,
    GcSort,
    GcBreadcrumbs
  }
}
</script>
