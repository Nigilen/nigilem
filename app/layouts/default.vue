<script setup lang="ts">


</script>

<template>
  <div class="main">
    <NuxtLoadingIndicator 
      :height="2"
      :duration="1000"
      color="var(--primary-color)000"
    />
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