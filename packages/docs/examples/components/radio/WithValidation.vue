<!-- #region template -->
<template>
  <n-options-group
    label="Select your ideal travelling idea"
    :error="validation.error"
    :error-message="validation.errorMessage"
    :success="!validation.error"
  >
    <n-radio v-model="modelValue" value="solo" label="Solo travel"/>
    <n-radio v-model="modelValue" value="backpacking" label="European Backpacking"/>
    <n-radio v-model="modelValue" value="cruise" label="Caribbean Cruise"/>
    <n-radio v-model="modelValue" value="volunteering" label="Volunteer Abroad"/>
    <n-radio v-model="modelValue" value="trekking" label="Himalayan Trek"/>
  </n-options-group>
</template>
<!-- #endregion template -->


<!-- #region script -->
<script setup lang="ts">
import {NRadio, NOptionsGroup} from '@nova-org/components'
import {computed, ref} from 'vue'

const modelValue = ref('solo')

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
