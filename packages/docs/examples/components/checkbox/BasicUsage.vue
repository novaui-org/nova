<!-- #region template -->
<template>
  <div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px;">
    <n-options-group label="Select your ideal travelling ideas">
      <n-checkbox v-model="modelValue" value="solo" label="Solo travel"/>
      <n-checkbox v-model="modelValue" value="backpacking" label="European Backpacking"/>
      <n-checkbox v-model="modelValue" value="cruise" label="Caribbean Cruise"/>
      <n-checkbox v-model="modelValue" value="volunteering" label="Volunteer Abroad"/>
      <n-checkbox v-model="modelValue" value="trekking" label="Himalayan Trek"/>
    </n-options-group>
  </div>
</template>
<!-- #endregion template -->

<!-- #region script -->
<script setup lang="ts">
import {NCheckbox, NOptionsGroup} from '@nova/components'
import {ref} from 'vue'

const modelValue = ref([])
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
