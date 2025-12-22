<template>
  <header class="header container">
    <NuxtLink to="/">
      <NuxtImg 
        class="header__logo" 
        src="/logo.svg" 
        alt="Логотип сайта" 
        width="99" 
        height="35"
      />
    </NuxtLink>
    <NavBar/>
  </header>
</template>

<style scoped lang="scss">

.header {
  position: fixed;
  inline-size: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 28px;
  background-color: var(--secondary-color);
  z-index: 1;

  &__logo {
    inline-size: 100px;
    block-size: 35px;
  }
}

</style>