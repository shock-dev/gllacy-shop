<template>
  <div id="app" class="container">
    <gc-header/>
    <router-view/>
  </div>
</template>

<script>
import GcHeader from "@/components/app/gcHeader";

export default {
  components: {
    GcHeader
  }
}
</script>

<style lang="scss">
@import "~@/scss/index.scss";
</style>
