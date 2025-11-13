<script setup lang="ts">


</script>

<template>
  <div class="main">
    <AppHeader />

    <slot />

    <AppFooter />
  </div>
</template>


<style scoped lang="scss">

.main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

</style>