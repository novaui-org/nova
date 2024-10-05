<!-- #region template -->
<template>
  <n-options-group label="Select your ideal travelling idea">
    <n-radio v-model="modelValue" value="solo" label="Solo travel" disabled/>
    <n-radio v-model="modelValue" value="backpacking" label="European Backpacking"/>
    <n-radio v-model="modelValue" value="cruise" label="Caribbean Cruise"/>
    <n-radio v-model="modelValue" value="volunteering" label="Volunteer Abroad" disabled/>
    <n-radio v-model="modelValue" value="trekking" label="Himalayan Trek"/>
  </n-options-group>
</template>
<!-- #endregion template -->


<!-- #region script -->
<script setup lang="ts">
import {NRadio, NOptionsGroup} from '@nova-org/components'
import {ref} from 'vue'

const modelValue = ref(null)
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
