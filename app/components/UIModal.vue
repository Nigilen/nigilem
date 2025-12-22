<script lang="ts" setup>

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const handleCloseModal = () => {
  emit('close');
};

</script>

<template>
  <Teleport to="body">
    <div v-if="props.isOpen" class="modal" @click="handleCloseModal">
      <div class="modal__content">
        <slot name="element" />
        <slot name="description" />
      </div>
    </div>
  </Teleport>

</template>

<style lang="scss" scoped>

.modal {
  position: fixed;
  z-index: 21;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background-color: white;
    max-inline-size: 90vw;
    max-block-size: 90vh;
    padding: 20px 20px;
    border-radius: 5px;
    overflow: scroll;
  }
}




</style>