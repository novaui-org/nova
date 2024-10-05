<!-- #region template -->
<template>
  <div>
    <n-text weight="medium" font-size="h5" html-tag="div" v-text="'🚀 Nova UI'"/>
    <n-text weight="light" font-size="small" html-tag="div" v-text="'Beautiful, fast and modern Vue 3 UI library.'"/>

    <n-divider/>

    <div style="display: flex; gap: 12px" class="n-mt-12">
      <n-text weight="light" font-size="paragraph" html-tag="div" v-text="'Beautiful'"/>
      <n-divider vertical/>
      <n-text weight="light" font-size="paragraph" html-tag="div" v-text="'Fast'"/>
      <n-divider vertical/>
      <n-text weight="light" font-size="paragraph" html-tag="div" v-text="'Modern'"/>
    </div>

  </div>
</template>
<!-- #endregion template -->


<!-- #region script -->
<script setup lang="ts">
import {NText, NDivider} from '@nova-org/components'
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
