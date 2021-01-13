<template>
  <div id="app" class="container">
    <overlay/>
    <gc-header/>
    <gc-mobile-menu/>
    <router-view/>
    <gc-footer/>
  </div>
</template>

<script>
import GcHeader from "@/components/app/header/gcHeader";
import GcFooter from "@/components/app/gcFooter";
import Overlay from "@/components/app/overlay";
import GcMobileMenu from "@/components/app/header/gcMobileMenu";

export default {
  components: {
    GcMobileMenu,
    Overlay,
    GcFooter,
    GcHeader
  }
}
</script>

<style lang="scss">
@import "~@/scss/index.scss";
</style>
