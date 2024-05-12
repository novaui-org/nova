<template>
  <n-slide-transition
    :visible="visibleInner"
    class="n-input-message"
    :class="{
      [`n-input-message--variant-${variant}`]: true
    }"
  >
    {{ message }}
  </n-slide-transition>
</template>

<script setup lang="ts">
import {type NInputMessageProps} from './types'
import {computed} from 'vue'
import NSlideTransition from '../NSlideTransition/NSlideTransition.vue'

const props = withDefaults(defineProps<NInputMessageProps>(), {
  variant: 'default',
  visible: true,
})

const visibleInner = computed<boolean>(() => props.visible && !!props.message)
</script>

<style scoped lang="scss">
.n-input-message {
  color: $n-default-50;
  font-size: $n-font-size-small;
  font-weight: $n-font-weight-regular;
  line-height: $n-line-height-body;

  /* Variant */
  &.n-input-message--variant-positive {
    color: $n-success;
  }

  &.n-input-message--variant-negative {
    color: $n-danger;
  }
}
</style>
