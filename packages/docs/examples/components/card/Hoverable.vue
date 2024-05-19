<!-- #region template -->
<template>
  <n-card variant="outline" hoverable>
    <n-text weight="medium" font-size="paragraph" html-tag="div" v-text="'Outline'"/>
    <n-text weight="light" font-size="small" html-tag="div" v-text="'Modern and responsive.'"/>
  </n-card>

  <n-card variant="flat" hoverable>
    <n-text weight="medium" font-size="paragraph" html-tag="div" v-text="'Flat'"/>
    <n-text weight="light" font-size="small" html-tag="div" v-text="'Modern and responsive.'"/>
  </n-card>

  <n-card variant="shadow-1" hoverable>
    <n-text weight="medium" font-size="paragraph" html-tag="div" v-text="'Shadow 1'"/>
    <n-text weight="light" font-size="small" html-tag="div" v-text="'Modern and responsive.'"/>
  </n-card>

  <n-card variant="shadow-2" hoverable>
    <n-text weight="medium" font-size="paragraph" html-tag="div" v-text="'Shadow 2'"/>
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
