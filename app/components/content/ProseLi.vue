<template>
  <li class="custom-li">
    <slot/>
  </li>
</template>

<style lang="scss" scoped>
  .custom-li {

    line-height: 1.7;
    padding-inline-start: 0.5em;
    margin-inline-start: 1em;
  }
  
  .custom-li::marker {
    color: tomato;
  }

</style>