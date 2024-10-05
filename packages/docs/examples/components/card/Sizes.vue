<!-- #region template -->
<template>
  <n-card size="sm">
    <n-text weight="medium" font-size="paragraph" html-tag="div" v-text="'Small'"/>
    <n-text weight="light" font-size="small" html-tag="div" v-text="'Modern and responsive.'"/>
  </n-card>

  <n-card size="md">
    <n-text weight="medium" font-size="paragraph" html-tag="div" v-text="'Medium'"/>
    <n-text weight="light" font-size="small" html-tag="div" v-text="'Modern and responsive.'"/>
  </n-card>

  <n-card size="lg">
    <n-text weight="medium" font-size="paragraph" html-tag="div" v-text="'Large'"/>
    <n-text weight="light" font-size="small" html-tag="div" v-text="'Modern and responsive.'"/>
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
