<template>
  <div class="slider">
    <hooper :center-mode="true">
      <slide>
        <img src="~@/assets/img/slider-img-1.png" alt="">
        <h2 class="slider__title">Крем-брюле и пломбир с малиновым джемом</h2>
        <button class="slider__btn def-btn">Давайте оба!</button>
      </slide>
      <slide>
        <img src="~@/assets/img/slider-img-1.png" alt="">
        <h2 class="slider__title">Крем-брюле и пломбир с малиновым джемом</h2>
        <button class="slider__btn def-btn">Давайте оба!</button>
      </slide>
      <slide>
        <img src="~@/assets/img/slider-img-1.png" alt="">
        <h2 class="slider__title">Крем-брюле и пломбир с малиновым джемом</h2>
        <button class="slider__btn def-btn">Давайте оба!</button>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import 'hooper/dist/hooper.css';

import {
  Hooper,
  Slide,
  Pagination as HooperPagination
} from 'hooper';

export default {
  name: "gcSlider",
  components: {
    Hooper,
    Slide,
    HooperPagination
  }
}
</script>
