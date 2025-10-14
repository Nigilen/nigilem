<script lang="ts" setup>
</script>

<template>
  <section class="about container">
    <h2 class="section-title about__title">О себе</h2>
    <div class="about__wrapper">
      <picture>
        <source media="(width <= 768px)" srcset="/images/avatar.webp">
        <img
          class="about__avatar"
          src="/images/avatar.webp"
          srcset="/images/avatar.webp 1x,
                  /images/avatar-x2.webp 2x,"
          alt="Николай Юськов"
          width="100"
          height="100"
          loading="lazy"
        >
      </picture>
      <p class="about__text">
        Меня зовут Николай, я веб-разработчик из России. Со своей командой мы создаем и продвигаем сайты по всей стране. 
      </p>
      <dl class="about__list">
        <div class="about__item about-item">
          <dt class="about-item__term">Возраст:</dt>
          <dd class="about-item__desc">36 лет</dd>
        </div>
        <div class="about__item about-item">
          <dt class="about-item__term">Гражданство:</dt>
          <dd class="about-item__desc">Россия</dd>
        </div>
        <div class="about__item about-item">
          <dt class="about-item__term">Фриланс:</dt>
          <dd class="about-item__desc">возможен</dd>
        </div>
        <div class="about__item about-item">
          <dt class="about-item__term">Адресс:</dt>
          <dd class="about-item__desc">
            <address class="about-item__value">Россия, Москва</address>
          </dd>
        </div>
        <div class="about__item about-item">
          <dt class="about-item__term">Телефон:</dt>
          <dd class="about-item__desc">
            <a class="about-item__value" href="tel:+79521179309">+7(952)117-93-09</a>
          </dd>
        </div>
        <div class="about__item about-item">
          <dt class="about-item__term">Email:</dt>
          <dd class="about-item__desc">
            <a class="about-item__value" href="mailto:info@nigilen.ru">info@nigilen.ru</a>
          </dd>
        </div>
      </dl>
      <a class="button about__link" href="#">Скачать резюме</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.about {
  max-inline-size: 967px;
  margin-inline: auto;
  margin-block-end: 180px;

  &__wrapper {
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: repeat(3, auto);
    gap: 30px;
  }

  &__avatar {
    display: flex;
    max-inline-size: 100px;
    max-block-size: 100px;
    border-radius: 50%;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &__text {
    font-size: 0.875rem;
    grid-column: 2 / -1;
    grid-row: 1 / 2;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    gap: 20px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  &__link {
    text-decoration: none;
    grid-column: 2 / -1;
    grid-row: 3 / -1;
    justify-self: flex-start;
  }

  @media (width < 768px) {
    &__wrapper {
      grid-template-columns: auto;
      grid-template-rows: auto;
    }

    &__avatar {
      justify-self: center;
      grid-column: 1 / 1;
      grid-row: unset;
      max-inline-size: 200px;
      max-block-size: 200px;
    }

    &__text {
      grid-column: 1 / 1;
      grid-row: unset;
    }

    &__list {
      grid-column: 1 / 1;
      grid-row: unset;
    }

    &__link {
      grid-column: 1 / 1;
      grid-row: unset;
    }

  }
}


.about-item {
  display: flex;
  column-gap: 8px;

  &__term {
    font-size: 0.875rem;
    color: #E17447;
  }

  &__desc {
    font-size: 0.875rem;
    margin: 0;
  }

  &__value {
    color: inherit;
    text-decoration: none;
    font-style: normal;
    white-space: nowrap;
  }
}

</style>