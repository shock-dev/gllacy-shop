<template>
  <footer class="footer flex between align">
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
    <div class="footer__links">
      <div class="footer__links-row flex">
        <div class="footer__links-col">
          <router-link class="footer__link like" to="#">Для поставщиков</router-link>
        </div>
        <div class="footer__links-col">
          <router-link class="footer__link" to="#">Наши документы</router-link>
        </div>
      </div>
      <div class="footer__links-row flex">
        <div class="footer__links-col">
          <router-link class="footer__link" to="#">О производстве</router-link>
        </div>
        <div class="footer__links-col">
          <router-link class="footer__link" to="#">Экологические стандарты</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "gcFooter"
}
</script>
