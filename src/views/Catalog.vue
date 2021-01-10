<template>
  <div class="catalog">
    <gc-breadcrumbs/>
    <h2 class="catalog__title">Сливочное мороженое</h2>
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

export default {
  name: "Catalog",
  components: {
    GcPagination,
    GcProducts,
    GcSort,
    GcBreadcrumbs
  }
}
</script>
