<script lang="ts" setup></script>
<template>
  <a href="/articles/article" class="blog-item">
    <img class="blog-item__img" src="/images/rectangle.png" alt="" width="294" height="294">
    <div class="blog-item__text">
      <time class="blog-item__date" datetime="2019-08-04">August 4, 2019</time>
      <h2 class="blog-item__title">Inspiring design trends this fall 2019</h2>
      <p class="blog-item__description">My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the…</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.blog-item {
  text-decoration: none;
  color: inherit;

  &__img {
    max-inline-size: 294px;
    inline-size: 100%;
    aspect-ratio: 1 / 1;
    margin-block-end: 15px;
  }
  
  &__text {
    max-inline-size: 80%;
    margin-inline: auto;
  }
  
  &__date {
    display: block;
    color: #E17346;
    border: 1px solid #E17346;
    padding: 4px 6px;
    font-size: 0.875rem;
    margin: 0 auto 11px;
    inline-size: max-content;
  }
  
  &__title {
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-block: 0 2px;
  }
  &__description {
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-block: 0;
  }
}
</style>