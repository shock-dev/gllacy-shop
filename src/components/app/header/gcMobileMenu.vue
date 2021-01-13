<template>
  <div class="mobile-menu" :class="{ active: mobileMenu }">
    <div class="mobile-menu__head">
      <button class="mobile-menu__head-button" @click="hideAll">
        <svg>
          <use href="~@/assets/img/sprite.svg#cancel"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "gcMobileMenu",
  computed: {
    ...mapGetters(['mobileMenu'])
  },
  methods: {
    ...mapMutations(['hideAll'])
  }
}
</script>
