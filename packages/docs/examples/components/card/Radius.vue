<!-- #region template -->
<template>
  <n-card radius="full">
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Full'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card radius="lg">
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Large'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card radius="md">
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Medium'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card radius="sm">
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Small'"/>
    <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
  </n-card>

  <n-card radius="none">
    <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'None'"/>
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
