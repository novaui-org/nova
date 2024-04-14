<!-- #region template -->
<template>
  <div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px;">
    <n-options-group
      label="Select your ideal travelling idea"
      :error="validation.error"
      :error-message="validation.errorMessage"
      :success="!validation.error"
      hint="Do not pick solo"
    >
      <n-radio v-model="modelValue" value="solo" label="Solo travel"/>
      <n-radio v-model="modelValue" value="backpacking" label="European Backpacking"/>
      <n-radio v-model="modelValue" value="cruise" label="Caribbean Cruise"/>
      <n-radio v-model="modelValue" value="volunteering" label="Volunteer Abroad"/>
      <n-radio v-model="modelValue" value="trekking" label="Himalayan Trek"/>
    </n-options-group>
  </div>
</template>
<!-- #endregion template -->


<!-- #region script -->
<script setup lang="ts">
import {NRadio, NOptionsGroup} from '@nova-org/components'
import {computed, ref} from 'vue'

const modelValue = ref('backpacking')

const validation = computed(() => ({
  error: modelValue.value === 'solo',
  errorMessage: 'You can\'t travel solo!',
}))
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
