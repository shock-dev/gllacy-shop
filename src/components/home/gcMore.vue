<template>
  <div class="more flex">
    <router-link class="more__item new" to="#">
      <div class="more__item-subtitle">Новое в нашем блоге</div>
      <p class="more__item-title">
        10 способов сервировки
        фруктовых щербетов к
        столу
      </p>
    </router-link>
    <div class="more__item sub">
      <p class="more__item-text">
        Подпишитесь на нашу сладкую рассылку и будете всегда в курсе всего самого вкусного, что у нас происходит. Обещаем не спамить и не слать всякой ненужной ерунды. Честно =)
      </p>
      <form class="more__item-form form">
        <input class="form__field" type="text" aria-label="Email" placeholder="email@example.com">
        <button class="form__btn def-btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "gcMore"
}
</script>
