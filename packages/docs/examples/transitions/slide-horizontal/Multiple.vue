<!-- #region template -->
<template>
  <n-options-group label="Select visible icons">
    <n-checkbox v-model="modelValue" value="solo" label="Solo travel"/>
    <n-checkbox v-model="modelValue" value="backpacking" label="European Backpacking"/>
    <n-checkbox v-model="modelValue" value="cruise" label="Caribbean Cruise"/>
  </n-options-group>

  <div class="multiple__btn-container n-mt-8">
    <n-slide-transition-group-horizontal>
      <n-icon v-if="modelValue.includes('solo')" name="vuesax/linear/map" size="40px" title="Solo travel"/>
      <n-icon v-if="modelValue.includes('backpacking')" name="vuesax/broken/shopping-bag" size="40px" title="European Backpacking"/>
      <n-icon v-if="modelValue.includes('cruise')" name="vuesax/linear/ship" size="40px" title="Caribbean Cruise"/>
    </n-slide-transition-group-horizontal>
  </div>
</template>
<!-- #endregion template -->

<!-- #region script -->
<script setup lang="ts">
import {NCheckbox, NIcon, NOptionsGroup, NSlideTransitionGroupHorizontal, NButton} from '@nova-org/components'
import {ref} from 'vue'

const modelValue = ref<string[]>(['solo', 'backpacking', 'cruise'])
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">
.multiple__btn-container {
  display: flex;
  gap: $n-space-8;
  align-items: center;
}
</style>
<!-- #endregion style -->
