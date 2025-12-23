<script lang="ts" setup>
import { ref } from 'vue';

const isOpen = ref(false);

const handleOpenModal = () => {
  isOpen.value = true; 
};
const handleCloseModal = () => {
  isOpen.value = false; 
};

const box = ref();
const ball = ref();
const y = ref(0);
const x = ref(0);
const speedX = ref(100);
const speedY = ref(0);
const gravity = ref(500);
let lastTime = 0;
// const delta = ref(0.1);

const anima = (timestamp: number) => {
  const delta = lastTime ? (timestamp - lastTime) / 1000 : 0;
  lastTime = timestamp;
  
  if (delta === 0) {
    requestAnimationFrame(anima);
    return;
  }

  const boxHeight = box.value.offsetHeight;
  const boxWidth = box.value.offsetWidth;
  const ballSize = ball.value.offsetWidth;
  const ground = boxHeight - ballSize;

  if (y.value < ground) {
    speedY.value += gravity.value * delta;
  } 
  y.value += speedY.value * delta;


  if (x.value < boxWidth) {
    x.value += speedX.value * delta;
  }

  if (x.value < 0) {
    speedX.value = -speedX.value;
  }
  
  if (x.value >= boxWidth - ballSize) {
    speedX.value = -speedX.value * 0.4;
  }
  
  if (y.value >= ground) {
    y.value = ground;
    speedY.value = -speedY.value * 0.7;
  }
  if (y.value < 0) {
    y.value = 0;
  }

  ball.value.style.transform = `translate(${x.value}px, ${y.value}px)`;
  requestAnimationFrame(anima);
};

onMounted(() => {
  lastTime = 0;
  requestAnimationFrame(anima);
});

</script>

<template>
  <div ref="box" class="box" @click="handleOpenModal">
    <div ref="ball" class="ball" />
  </div>
  <UIModal :is-open="isOpen" @close="handleCloseModal">
    <template #element>
      <div ref="box" class="box">
        <div ref="ball" class="ball" />
      </div>
    </template>
    <template #description>
      <pre class="description">
        <code>
const box = ref();
const ball = ref();
const y = ref(0);
const x = ref(0);
const v = ref(0);
const g = ref(9.8);
const delta = ref(0.1);

const anima = () => {
  const boxHeight = box.value.offsetHeight;
  const ballSize = ball.value.offsetWidth;

  if (y.value &lt; (boxHeight - (ballSize * 2))) {
    v.value += g.value * delta.value;
  } 
  if (y.value >= (boxHeight - (ballSize * 2))) {
    v.value = -v.value;
  }

  y.value += v.value;
  ball.value.style.transform = `translate(${x.value}px, ${y.value}px)`;
  requestAnimationFrame(anima);
};
        </code>
      </pre>
    </template>
  </UIModal>
</template>

<style lang="scss" scoped>


.box {
  display: block;
  margin: auto;
  inline-size: 100px;
  block-size: 100px;
  border: 1px solid var(--primary-color);
  border-bottom-width: 2px;
}

.ball {
  width: 10px;
  height: 10px;
  background-color: tomato;
  border-radius: 50%;
}

.description {
  font-size: clamp(12px, 1vw, 16px);
  white-space: pre-wrap;
}

</style>