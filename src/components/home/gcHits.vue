<template>
  <div class="hits flex">
    <div class="hits__item">
      <gc-card :hit="true"/>
    </div>
    <div class="hits__item">
      <gc-card :hit="true"/>
    </div>
    <div class="hits__item">
      <gc-card :hit="true"/>
    </div>
    <div class="hits__item">
      <gc-card :hit="true"/>
    </div>
  </div>
</template>

<script>
import GcCard from "@/components/app/gcCard";

export default {
  name: "gcHits",
  components: {
    GcCard
  }
}
</script>
