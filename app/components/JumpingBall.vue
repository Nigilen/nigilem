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
const v = ref(0);
const g = ref(9.8);
const delta = ref(0.1);


const anima = () => {
  const boxHeight = box.value.offsetHeight;
  const ballSize = ball.value.offsetWidth;

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

onMounted(() => {
  anima();
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
  // transform-origin: bottom;
}

.description {
  font-size: clamp(12px, 1vw, 16px);
  white-space: pre-wrap;
}

</style>