<!-- #region template -->
<template>
  <n-card size="lg" divider="header">
    <template #header>
      <n-text weight="medium" font-size="h5" html-tag="div" :text="'Header separator'"/>
      <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
    </template>

    <template #default>
      Default slot.
    </template>

    <template #footer>
      <n-button size="sm" label="Footer slot"/>
    </template>
  </n-card>

  <n-card size="lg" divider="footer">
    <template #header>
      <n-text weight="medium" font-size="h5" html-tag="div" :text="'Footer separator'"/>
      <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
    </template>

    <template #default>
      Default slot.
    </template>

    <template #footer>
      <n-button size="sm" label="Footer slot"/>
    </template>
  </n-card>

  <n-card size="lg" divider="both">
    <template #header>
      <n-text weight="medium" font-size="h5" html-tag="div" :text="'Both separator'"/>
      <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
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
  width: 200px;
}
</style>
<!-- #endregion style -->
