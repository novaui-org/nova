<!-- #region template -->
<template>
  <n-card class="n-text-black n-bg-default">
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Default'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card class="n-text-white n-bg-primary" >
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Primary'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card class="n-text-white n-bg-secondary" >
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Secondary'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card class="n-text-white n-bg-success" >
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Success'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card class="n-text-white n-bg-warning" >
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Warning'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card class="n-text-white n-bg-danger" >
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Danger'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>
</template>
<!-- #endregion template -->


<!-- #region script -->
<script setup lang="ts">
import {NText, NCard} from '@nova-org/components'
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">
.n-card {
  width: 200px;
}
</style>
<!-- #endregion style -->
