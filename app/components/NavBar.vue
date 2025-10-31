<script lang="ts" setup>

const isMenuOpen = ref(false);

const handleOpenMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
  <nav class="site-nav">
    <ul class="site-nav__list nav-list" :class="{ ['nav-list--open']:isMenuOpen }">
      <li>
        <a class="nav-list__link" href="/resume">Резюме</a>
      </li>
      <li>
        <a class="nav-list__link" href="/portfolio">Портфолио</a>
      </li>
      <li>
        <a class="nav-list__link" href="/blog">Блог</a>
      </li>
      <li>
        <a class="nav-list__link" href="/contacts">Контакты</a>
      </li>
      <li>
        <a class="nav-list__link" href="/services">Услуги</a>
      </li>
    </ul>
  </nav>
  <button class="button--nav nav-button" type="button" @click="handleOpenMenu">
    {{ isMenuOpen ? 'CloseMenu' : 'OpenMenu' }}
  </button>
</template>


<style scoped lang="scss">

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 50px;
  
  &__link {
    font-size: 0.875rem;
    color: #55534E; 
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    padding: 5px;

    &:hover {
      color: #E17346;
    }
  }
}

.button--nav {
  display: none;
}


@media (width < 768px) {

  .site-nav {
    position: absolute;
    inset-inline: 0;
    inset-block-end: 0;
  }

  .nav-list {
    flex-direction: column;
    position: absolute;
    inset-block-start: 100%;
    inset-inline-start: 0;
    inline-size: 100%;
    block-size: max-content;
    background-color: #fff;
    padding: 40px 40px;
    gap: 30px;
    align-items: flex-end;
    transition-duration: .3s;
    transform: translateX(-100%);

    &__link {
      font-size: 1.25rem;
    }
  }

  .button--nav {
    display: block;
  }
  
  .nav-list--open {
    transform: translateX(0);
  }

  .nav-button--open {
    background-color: #E17346;
  }
}

</style>