<!-- #region template -->
<template>
  <div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px;">
    <n-options-group label="Select your ideal travelling idea">
      <n-radio v-model="modelValue" value="solo" label="Solo travel" description="Traveling solo to remote destinations"/>
      <n-radio v-model="modelValue" value="backpacking" label="European Backpacking" description="Backpacking across Europe on a budget"/>
      <n-radio v-model="modelValue" value="cruise" label="Caribbean Cruise" description="Going on a luxury cruise to the Caribbean"/>
      <n-radio v-model="modelValue" value="volunteering" label="Volunteer Abroad" description="Volunteering in a rural community abroad"/>
      <n-radio v-model="modelValue" value="trekking" label="Himalayan Trek" description="Discover the Himalayas: towering peaks, rugged terrain, ancient cultures"/>
    </n-options-group>
  </div>
</template>
<!-- #endregion template -->


<!-- #region script -->
<script setup lang="ts">
import {NRadio, NOptionsGroup} from '@nova/components'
import {ref} from 'vue'

const modelValue = ref(null)
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
