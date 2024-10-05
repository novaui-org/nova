<template>
  <n-card
    class="display-container n-mt-16"
    :class="{'display-container--vertical': vertical}"
    :variant="variant"
    radius="md"
    size="md"
  >
    <div class="display-container__inner">
      <slot/>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import {NCard, NCardProps} from '@nova-org/components'

withDefaults(defineProps<{ vertical?: boolean, variant?: NCardProps['variant'] }>(),{
  variant: 'outline'
})
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
