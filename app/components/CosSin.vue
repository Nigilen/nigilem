<script lang="ts" setup>

const isOpen = ref(false);

const handleOpenModal = () => {
  isOpen.value = true; 
};
const handleCloseModal = () => {
  isOpen.value = false; 
};

const dot = ref();
const circle = ref();
const degress = ref(0);
const delta = ref(1);

const animate = () => {
  if (degress.value < 360) {
    degress.value += 1 * delta.value;
  } 
  if (degress.value === 360) {
    degress.value = 0;
  }
  const radians = degress.value * (Math.PI / 180);
  
  const positionX = Math.cos(radians) * circle.value.offsetWidth / 2;
  const positionY = Math.sin(radians) * circle.value.offsetHeight / 2;

  dot.value.style.transform = `translate(${positionX}px, ${positionY}px)`;
  
  requestAnimationFrame(animate);
};

onMounted(() => {
  animate();
});

</script>

<template>
  <div ref="circle" class="circle" @click="handleOpenModal">
    <div ref="dot" class="dot"></div>
  </div>
  <UIModal :is-open="isOpen" @close="handleCloseModal">
    <template #element>
      <div ref="circle" class="circle">
        <div ref="dot" class="dot"></div>
      </div>
    </template>
    <template #description>
      <pre class="description">
        <code>
const dot = ref();
const circle = ref();
const degress = ref(0);
const delta = ref(1);

const animate = () => {
  if (degress.value &lt; 360) {
    degress.value += 1 * delta.value;
  } 
  if (degress.value === 360) {
    degress.value = 0;
  }
  const radians = degress.value * (Math.PI / 180);
  
  const positionX = Math.cos(radians) * circle.value.offsetWidth / 2;
  const positionY = Math.sin(radians) * circle.value.offsetHeight / 2;

  dot.value.style.transform = `translate(${positionX}px, ${positionY}px)`;
  
  requestAnimationFrame(animate);
};
        </code>
      </pre>
    </template>
  </UIModal>
</template>

<style lang="scss" scoped>

.circle {
  position: relative;
  margin: auto;
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
}

.dot {
  position: absolute;
  z-index: 1;
  inset: 0;
  margin: auto;
  display: block;
  inline-size: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: tomato;
}

.description {
  font-size: clamp(12px, 1vw, 16px);
  white-space: pre-wrap;
}


</style>