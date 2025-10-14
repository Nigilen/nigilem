<template>
  <section class="contacts-info container">
    <h2 class="section-title contacts-info__title">Контактная информация</h2>
    <dl class="contacts-info__list" role="list">
      <div class="contacts-info__item contact-info-item" role="listitem">
        <dt class="contact-info-item__term">
          <Icon name="my-icon:phone" size="25" />
          Телефон
        </dt>
        <dd class="contact-info-item__desc">
          <a class="contact-info-item__value" href="tel:+79521179309">+7 (952) 117 93 09</a>
        </dd>
      </div>
      <div class="contacts-info__item contact-info-item" role="listitem">
        <dt class="contact-info-item__term">
          <Icon name="my-icon:email" size="25" />
          Email
        </dt>
        <dd class="contact-info-item__desc">
          <a class="contact-info-item__value" href="mailto:info@nigilem.ru">info@nigilem.ru</a>
        </dd>
      </div>
      <div class="contacts-info__item contact-info-item" role="listitem">
        <dt class="contact-info-item__term">
          <Icon name="my-icon:address" size="25" />
          Адрес
        </dt>
        <dd class="contact-info-item__desc">
          <address class="contact-info-item__value">г. Москва, ул. Ленина, д. 1</address>
        </dd>
      </div>
    </dl>
  </section>
</template>

<style scoped lang="scss">

.contacts-info {
  max-inline-size: 967px;
  margin-inline: auto;
  margin-block-end: 180px;

  &__list {
    display: flex;
    justify-content: space-between;
  }

  &__item {

  }
}

.contact-info-item {
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  &__term {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__desc {
    font-size: 0.875rem;
    margin: 0;
  }

  &__value {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
}

@media (width < 768px) {

  .contacts-info {
    
    &__list {
      flex-direction: column;
      row-gap: 60px;
    }
  }
}

</style>