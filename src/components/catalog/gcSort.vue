<template>
  <div class="sort">
    <div class="sort__row">
      <div class="sort__col">
        <div class="sort__col-title">Сортировка:</div>
        <div class="sort__col-box type">
          <button
            class="type__button"
            :class="{ active: isPopupActive }"
            @click="isPopupActive = !isPopupActive"
          >
            По популярности
          </button>
          <ul class="type__list" :class="{ active: isPopupActive }">
            <li class="type__item">
              <router-link class="type__link" to="#">По цене</router-link>
            </li>
            <li class="type__item">
              <router-link class="type__link" to="#">По алфавиту</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="sort__col">
        <div class="sort__col-title">Цена: {{ slider[0] }} руб. - {{ slider[1] }} руб.</div>
        <div class="sort__col-box sort__col-box--slider">
          <vue-slider
            :height="4"
            :min="0"
            :max="700"
            :tooltip="'none'"
            :railStyle="{ backgroundColor: 'rgb(255 255 255 / 50%)' }"
            :processStyle="{ backgroundColor: 'rgb(255 255 255 / 100%)' }"
            v-model="slider"
          >
            <template v-slot:dot>
              <div class="custom-dot"></div>
            </template>
          </vue-slider>
        </div>
      </div>
      <div class="sort__col">
        <div class="sort__col-title">Наполнители:</div>
        <div class="sort__col-box toggle">
          <ul class="toggle__list flex">
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="radio" name="radio">
                <span class="toggle__fake"></span>
                <span class="toggle__text">0%</span>
              </label>
            </li>
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="radio" name="radio">
                <span class="toggle__fake"></span>
                <span class="toggle__text">до 10%</span>
              </label>
            </li>
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="radio" name="radio">
                <span class="toggle__fake"></span>
                <span class="toggle__text">до 30%</span>
              </label>
            </li>
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="radio" name="radio">
                <span class="toggle__fake"></span>
                <span class="toggle__text">выше 30%</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sort__row">
      <div class="sort__col">
        <div class="sort__col-title">Наполнители:</div>
        <div class="sort__col-box toggle">
          <ul class="toggle__list flex">
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="checkbox" checked>
                <span class="toggle__fake"></span>
                <span class="toggle__text">шоколадные</span>
              </label>
            </li>
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="checkbox" checked>
                <span class="toggle__fake"></span>
                <span class="toggle__text">сахарные присыпки</span>
              </label>
            </li>
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="checkbox">
                <span class="toggle__fake"></span>
                <span class="toggle__text">фрукты</span>
              </label>
            </li>
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="checkbox">
                <span class="toggle__fake"></span>
                <span class="toggle__text">сиропы</span>
              </label>
            </li>
            <li class="toggle__item">
              <label class="toggle__label">
                <input class="toggle__real" type="checkbox">
                <span class="toggle__fake"></span>
                <span class="toggle__text">джемы</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="sort__col button">
        <button class="sort__col-button">Применить</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: "gcSort",
  components: {
    VueSlider
  },
  data: () => ({
    slider: [100, 500],
    isPopupActive: false
  }),
  created() {
    const onClickOutside = e => this.isPopupActive = this.$el.contains(e.target) && this.isPopupActive;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  },
}
</script>
