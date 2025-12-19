<script lang="ts" setup>

</script>

<template>
  <div class="black-box">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>

  .black-box {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 10px;
    aspect-ratio: 1 / 1;
    outline: 1px solid rgb(225, 225, 225);
    border-radius: 16px;
  }

</style>