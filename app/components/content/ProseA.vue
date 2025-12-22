<template>
  <a class="custom-link">
    <slot/>
  </a>
</template>

<style lang="scss" scoped>
.custom-link {
  color: var(--accent-color);
  text-decoration-color: transparent;
  transition: all 0.1s ease-in-out;
  text-underline-offset: 0.4em;
}

.custom-link:hover {
  text-decoration-color: var(--accent-color);
  text-underline-offset: 0.3em;
}
</style>