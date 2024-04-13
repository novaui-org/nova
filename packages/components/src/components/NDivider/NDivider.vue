<template>
  <hr class="n-divider" :class="{'n-divider--vertical': vertical}"/>
</template>

<script setup lang="ts">
import {NDividerProps} from 'src/components/NDivider/types.ts'

defineProps<NDividerProps>()
</script>

<style scoped lang="scss">
.n-divider {
  $n-divider-size: 1px;

  display: block;
  flex-shrink: 0;
  height: $n-divider-size;

  padding: 0;
  margin: 0;
  background-color: $n-divider;

  &.n-divider--vertical {
    height: auto;
    align-self: stretch;
    width: $n-divider-size;
  }
}
</style>
