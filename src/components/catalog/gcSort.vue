<template>
  <div class="sort">
    <div class="sort__row">
      <div class="sort__col">
        <div class="sort__col-title">Сортировка:</div>
        <div class="sort__col-wrapper"></div>
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
export default {
  name: "gcSort"
}
</script>
