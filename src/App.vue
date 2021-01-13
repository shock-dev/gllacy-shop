<template>
  <div id="app" class="container">
    <overlay/>
    <gc-header/>
    <router-view/>
    <gc-footer/>
  </div>
</template>

<script>
import GcHeader from "@/components/app/header/gcHeader";
import GcFooter from "@/components/app/gcFooter";
import Overlay from "@/components/app/overlay";

export default {
  components: {
    Overlay,
    GcFooter,
    GcHeader
  }
}
</script>

<style lang="scss">
@import "~@/scss/index.scss";
</style>
