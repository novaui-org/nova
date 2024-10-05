<template>
  <div
    class="n-input-message"
    :class="{
      [`n-input-message--variant-${variant}`]: true
    }"
  >
    <slot v-if="$slots.default"/>
    <template v-else>
      {{ message }}
    </template>
  </div>
</template>

<script setup lang="ts">
import {type NInputMessageProps} from './types'

withDefaults(defineProps<NInputMessageProps>(), {
  variant: 'default',
})
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
