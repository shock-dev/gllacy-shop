<template>
  <div id="app" class="container">
    <gc-header/>
    <router-view/>
    <gc-footer/>
  </div>
</template>

<script>
import GcHeader from "@/components/app/gcHeader";
import GcFooter from "@/components/app/gcFooter";

export default {
  components: {
    GcFooter,
    GcHeader
  }
}
</script>

<style lang="scss">
@import "~@/scss/index.scss";
</style>
