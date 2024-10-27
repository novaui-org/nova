<!-- #region template -->
<template>
  <n-card size="lg">
    <template #header>
      <n-text weight="medium" font-size="h5" html-tag="div" :text="'Header slot'"/>
      <n-text weight="light" font-size="small" html-tag="div" :text="'Beautiful, fast and modern Vue 3 UI library.'"/>
    </template>

    <template #default>
      Default slot.
    </template>

    <template #footer>
      <n-button size="sm" label="Footer slot"/>
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
