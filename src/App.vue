<template>
  <div id="app" class="container">
    <overlay/>
    <gc-header/>
    <gc-mobile-menu/>
    <router-view/>
    <gc-footer/>

    <!--  Additional components  -->
    <gc-login-form-mobile/>
  </div>
</template>

<script>
import GcHeader from "@/components/app/header/gcHeader";
import GcFooter from "@/components/app/gcFooter";
import Overlay from "@/components/app/overlay";
import GcMobileMenu from "@/components/app/header/gcMobileMenu";
import GcLoginFormMobile from "@/components/app/header/gcLoginFormMobile";

export default {
  components: {
    GcLoginFormMobile,
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
