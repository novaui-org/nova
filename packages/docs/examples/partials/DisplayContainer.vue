<template>
  <n-card class="display-container n-mt-16" variant="outline" radius="md" size="md">
    <div class="display-container__inner">
      <slot/>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import {NCard} from '@nova-org/components'
</script>

<style scoped lang="scss">
.display-container {
  padding: $n-space-16 $n-space-8;

  .display-container__inner {
    display: flex;
    flex-wrap: wrap;
    gap: $n-space-12;
  }
}
</style>
