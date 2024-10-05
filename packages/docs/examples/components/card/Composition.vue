<!-- #region template -->
<template>
  <n-card divider="header" hoverable variant="shadow-1" size="lg">
    <template #header>
      <n-text weight="medium" font-size="h5" html-tag="div" v-text="'🚀 Nova UI'"/>
      <n-text weight="light" font-size="small" html-tag="div" v-text="'Beautiful, fast and modern Vue 3 UI library.'"/>
    </template>
    Oriented towards simplicity and ultimate User experience.
    <template #footer>
      <n-button size="sm" label="Primary Action"/>
    </template>
  </n-card>
</template>
<!-- #endregion template -->


<!-- #region script -->
<script setup lang="ts">
import {NText, NCard, NButton} from '@nova-org/components'
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">
.n-card {
  width: 400px;
}
</style>
<!-- #endregion style -->
