<script lang="ts" setup>
import { ref } from 'vue';

const box = ref();
const ball = ref();
const y = ref(0);
const x = ref(0);
const v = ref(0);
const g = ref(9.8);
const delta = ref(0.1);

onMounted(() => {
  const boxHeight = box.value.offsetHeight;
  const ballSize = ball.value.offsetWidth;

  const anima = () => {
    if (y.value < (boxHeight - (ballSize * 2))) {
      v.value += g.value * delta.value;
    } 
    if (y.value >= (boxHeight - (ballSize * 2))) {
      v.value = -v.value;
    }

    y.value += v.value;
    ball.value.style.transform = `translate(${x.value}px, ${y.value}px)`;
    requestAnimationFrame(anima);
  };

  requestAnimationFrame(anima);
});

</script>

<template>
  <div ref="box" class="box">
    <div ref="ball" class="ball" />
  </div>
</template>

<style lang="scss" scoped>

.box {
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  border-bottom-width: 2px;
}

.ball {
  width: 10px;
  height: 10px;
  background-color: tomato;
  border-radius: 50%;
  // transform-origin: bottom;
}

</style>