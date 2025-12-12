<script setup lang="ts">

const props = defineProps<{
  title?: string;
  subtitle?: string;

  date?: string;
  breadcrumbs?: string[];
}>();

</script>

<template>
  <section class="hero container">
    <time v-if="date" class="hero__date" datetime="2019-08-04">{{ props.date }}</time>

    <h1 class="hero__title">{{ props.title }}</h1>
    <p v-if="props.subtitle" class="hero__subtitle">{{ props.subtitle }}</p>

    <ul v-if="breadcrumbs" class="hero__breadcrumbs breadcrumbs">
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link" href="#">{{ props.breadcrumbs ? props.breadcrumbs[0] : '' }}</a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 86dvh;

  &__title {
    font-size: 4.625rem;
    margin-bottom: 1rem;
    margin-top: 0;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }
  
  &__subtitle {
    margin: 0;
    font-size: 0.875rem;
  }

  &__date {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    padding: 4px 6px;
    border: 1px solid #E17346;
    color: #E17346;
  }
}

.breadcrumbs {
  margin-top: 1rem;
  padding: 0;

  &__item {
    margin-right: 0.5rem;
    list-style: none;
    font-size: 0.875rem;
  }

  &__link {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
}

@media (width < 768px) {
  
  .hero {

    &__title {
      font-size: 3.5rem;
    }

  }
}


</style>