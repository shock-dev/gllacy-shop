<template>
  <div class="hits flex">
    <div class="hits__item" v-for="({ title, price, imageUrl }, index) in hitProducts" :key="index">
      <gc-card
        :title="title"
        :price="price"
        :imageUrl="imageUrl"
        :hit="true"
      />
    </div>
  </div>
</template>

<script>
import GcCard from "@/components/app/gcCard";
import { mapGetters } from 'vuex'

export default {
  name: "gcHits",
  components: {
    GcCard
  },
  computed: {
    ...mapGetters('hits', {
      hitProducts: 'items'
    })
  }
}
</script>
