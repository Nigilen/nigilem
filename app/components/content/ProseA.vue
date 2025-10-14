<template>
  <a class="custom-link">
    <slot/>
  </a>
</template>

<style lang="scss" scoped>
.custom-link {
  color: #E17346;
  text-decoration-color: transparent;
  transition: all 0.1s ease-in-out;
  text-underline-offset: 0.4em;
}

.custom-link:hover {
  text-decoration-color: #E17346;
  text-underline-offset: 0.3em;
}
</style>