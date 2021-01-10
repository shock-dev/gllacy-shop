<template>
  <div class="catalog">
    <gc-breadcrumbs/>
    <h2 class="catalog__title">Сливочное мороженое</h2>
    <gc-sort/>
    <gc-products/>
  </div>
</template>

<script>
import GcBreadcrumbs from "@/components/catalog/gcBreadcrumbs";
import GcSort from "@/components/catalog/gcSort";
import GcProducts from "@/components/catalog/gcProducts";

export default {
  name: "Catalog",
  components: {
    GcProducts,
    GcSort,
    GcBreadcrumbs
  }
}
</script>
