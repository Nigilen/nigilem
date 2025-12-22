<script lang="ts" setup>

const { toggleTheme, colorMode } = useColorMode();

</script>

<template>
  <footer class="footer container">
    <p class="copyright">2025 Nigilen</p>
    <button class="button--toggle-theme" type="button" @click="toggleTheme">
      <Icon name="my-icon:moon" />
    </button>
  </footer>
</template>


<style lang="scss" scoped>

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 30px;
}

.copyright {
  color: #aaa;
}

.button--toggle-theme {
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  padding: 5px;

  &:hover {
    opacity: 1;
  }
}

@media (width < 768px) {
  .footer {
    justify-content: center;
  }
  .button--toggle-theme {
    position: fixed;
    inset-inline-end: 20px;
    inset-block-end: 40px;
  }
}

</style>