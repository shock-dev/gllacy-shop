<template>
  <div class="home">
    <gc-slider/>
    <gc-sales/>
    <gc-hits/>
    <gc-about/>
    <gc-more/>
  </div>
</template>

<script>
import GcSlider from "@/components/home/gcSlider";
import GcSales from "@/components/home/gcSales";
import GcHits from "@/components/home/gcHits";
import GcAbout from "@/components/home/gcAbout";
import GcMore from "@/components/home/gcMore";

export default {
  name: 'Home',
  components: {
    GcMore,
    GcAbout,
    GcHits,
    GcSales,
    GcSlider
  }
}
</script>
