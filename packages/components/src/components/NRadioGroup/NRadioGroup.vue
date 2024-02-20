<template>
  <div class="n-radio-group" :class="{'n-radio-group--disabled': disabled}" role="radiogroup">
    <span class="n-radio-group__label" v-text="label"/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {NRadioGroupProps} from 'src/components/NRadioGroup/types.ts'

defineProps<NRadioGroupProps>()
</script>

<style scoped lang="scss">
.n-radio-group {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: $n-space-8;

  .n-radio-group__label {
    line-height: 1.5;
    font-size: 1rem;
    color: $n-default-50;
    font-weight: 400;
  }

  &.n-radio-group--disabled {
    opacity: 0.5;
    pointer-events: none;

    :deep(.n-radio.n-radio--disabled) {
      /* Prevent double changing of opacity for nested NRadio. */
      opacity: initial;
    }
  }
}
</style>
