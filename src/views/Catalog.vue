<template>
  <div class="catalog">
    <gc-breadcrumbs/>
    <h2 class="catalog__title">Сливочное мороженое</h2>
    <gc-sort/>
  </div>
</template>

<script>
import GcBreadcrumbs from "@/components/catalog/gcBreadcrumbs";
import GcSort from "@/components/catalog/gcSort";

export default {
  name: "Catalog",
  components: {
    GcSort,
    GcBreadcrumbs
  }
}
</script>
