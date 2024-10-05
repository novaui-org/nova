<template>
  <n-card
    class="display-container n-mt-16"
    :class="{'display-container--vertical': vertical}"
    variant="outline"
    radius="md"
    size="md"
  >
    <div class="display-container__inner">
      <slot/>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import {NCard} from '@nova-org/components'

defineProps<{ vertical?: boolean }>()
</script>

<style scoped lang="scss">
.display-container {
  padding: $n-space-16 $n-space-8;

  .display-container__inner {
    display: flex;
    flex-wrap: wrap;
    gap: $n-space-12;
    align-items: center;
  }

  &.display-container--vertical {
    .display-container__inner {
      align-items: stretch;
      flex-direction: column;
    }
  }
}
</style>
