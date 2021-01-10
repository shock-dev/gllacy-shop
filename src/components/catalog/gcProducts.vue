<template>
  <div class="products flex">
    <div class="products__item" v-for="({ title, price, imageUrl }, index) in products" :key="index">
      <gc-card
        :title="title"
        :price="price"
        :imageUrl="imageUrl"
      />
    </div>
  </div>
</template>

<script>
import GcCard from "@/components/app/gcCard";
import { mapGetters } from 'vuex'

export default {
  name: "gcProducts",
  components: {
    GcCard
  },
  computed: {
    ...mapGetters('products', {
      products: 'items'
    })
  }
}
</script>
