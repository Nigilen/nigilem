<template>
  <figure class="blockquote">
    <blockquote class="blockquote__text">
      <slot name="blockquote"/>
    </blockquote>
    <figcaption class="blockquote__autor">
      <slot name="autor"/>
    </figcaption>
  </figure>
</template>


<style lang="scss" scoped>
.blockquote {
  border-left: 2px solid #E17346;
  padding-left: 20px;
  font-style: italic;
  margin-left: 0;
  color: #A5A5A5;
}

.blockquote__text {
  margin: 0;
}

</style>