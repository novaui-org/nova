<!-- #region template -->
<template>
  <n-checkbox v-model="modelValue" label="Show button right" class="n-mr-4"/>

  <n-slide-transition-horizontal>
    <n-button v-if="modelValue" label="Button"/>
  </n-slide-transition-horizontal>
</template>
<!-- #endregion template -->

<!-- #region script -->
<script setup lang="ts">
import {NCheckbox, NSlideTransitionHorizontal, NButton} from '@nova-org/components'
import {ref} from 'vue'

const modelValue = ref<boolean>(true)
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
