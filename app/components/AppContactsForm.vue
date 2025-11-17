<script lang="ts" setup>

const props = defineProps<{
  title?: string;
  button?: string;
}>();

const handleSubmit = () => {
  console.log('submit');
};



</script>

<template>
  <section class="contacts-form container">
    <h2 class="section-title">{{ props.title }}</h2>
    <form class="form" action="#" method="POST" @submit.prevent="handleSubmit">
      <div class="form__field">
        <label class="form__label visibility" for="form-name">Ваше имя</label>
        <input 
          id="form-name" 
          class="form__input" 
          name="name" 
          type="text" 
          placeholder="Имя" 
          required
        >
        <span class="form__error form-name-error">Поле обязательно для заполнения</span>
      </div>
      <div class="form__field">
        <label class="form__label visibility" for="form-mail">Ваш email</label>
        <input 
          id="form-mail" 
          class="form__input" 
          name="mail" 
          type="email" 
          placeholder="Email" 
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
          required
        >
      </div>
      <div class="form__field">
        <label class="form__label visibility" for="form-message">Сообщение</label>
        <textarea 
          id="form-message" 
          class="form__textarea" 
          name="message" 
          placeholder="Сообщение" 
          rows="5" 
          required
        />
      </div>
      <button class="button form__button" type="submit">{{ props.button }}</button>
    </form>
  </section>
</template>


<style scoped lang="scss">

.contacts-form {
  max-inline-size: 967px;
  margin-inline: auto;
  margin-block-end: 180px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__input,
  &__textarea {
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ddd;
    font: inherit;
    font-size: 0.875rem;
    line-height: 24px;
    padding: 23px 0;

    &::placeholder {
      color: inherit;
    }

    &:focus {
      outline: none;
      border-bottom-color: #E17447;
    }
  }
  &__button {
    align-self: flex-start;
  }
  &__textarea {
    resize: none;
  }

  &__error {
    display: none;
    font-size: 0.875rem;
    color: #E17447;
  }

}

</style>