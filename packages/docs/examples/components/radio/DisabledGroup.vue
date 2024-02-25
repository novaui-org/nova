<!-- #region template -->
<template>
  <div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px;">
    <n-radio-group label="Select your ideal travelling idea" disabled>
      <n-radio v-model="modelValue" value="solo" label="Solo travel"/>
      <n-radio v-model="modelValue" value="backpacking" label="European Backpacking"/>
      <n-radio v-model="modelValue" value="cruise" label="Caribbean Cruise"/>
      <n-radio v-model="modelValue" value="volunteering" label="Volunteer Abroad"/>
      <n-radio v-model="modelValue" value="trekking" label="Himalayan Trek"/>
    </n-radio-group>
  </div>
</template>
<!-- #endregion template -->


<!-- #region script -->
<script setup lang="ts">
import {NRadio, NRadioGroup} from '@nova/components'
import {ref} from 'vue'

const modelValue = ref(null)
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
