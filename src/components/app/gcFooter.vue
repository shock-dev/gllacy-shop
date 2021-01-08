<template>
  <footer class="footer flex between">
    <div class="footer__social social">
      <ul class="social__list flex">
        <li class="social__item">
          <router-link class="social__link" to="#">
            <svg>
              <use href="~@/assets/img/sprite.svg#twitter"></use>
            </svg>
          </router-link>
        </li>
        <li class="social__item">
          <router-link class="social__link" to="#">
            <svg>
              <use href="~@/assets/img/sprite.svg#instagram"></use>
            </svg>
          </router-link>
        </li>
        <li class="social__item">
          <router-link class="social__link" to="#">
            <svg>
                <use href="~@/assets/img/sprite.svg#facebook"></use>
            </svg>
          </router-link>
        </li>
        <li class="social__item">
          <router-link class="social__link" to="#">
            <svg>
              <use href="~@/assets/img/sprite.svg#vk"></use>
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "gcFooter"
}
</script>
