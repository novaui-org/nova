<!-- #region template -->
<template>
  <n-options-group label="Select visible cards">
    <n-checkbox v-model="modelValue" value="solo" label="Solo travel"/>
    <n-checkbox v-model="modelValue" value="backpacking" label="European Backpacking"/>
    <n-checkbox v-model="modelValue" value="cruise" label="Caribbean Cruise"/>
  </n-options-group>

  <n-slide-transition-group>
    <n-card v-if="modelValue.includes('solo')" size="sm">
      <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Solo travel'"/>
      <n-text weight="light" font-size="small" html-tag="div" :text="'Traveling solo to remote destinations'"/>
    </n-card>
    <n-card v-if="modelValue.includes('backpacking')" size="sm">
      <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'European Backpacking'"/>
      <n-text weight="light" font-size="small" html-tag="div" :text="'Backpacking across Europe on a budget'"/>
    </n-card>
    <n-card v-if="modelValue.includes('cruise')" size="sm">
      <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Caribbean Cruise'"/>
      <n-text weight="light" font-size="small" html-tag="div" :text="'Going on a luxury cruise to the Caribbean'"/>
    </n-card>
  </n-slide-transition-group>
</template>
<!-- #endregion template -->

<!-- #region script -->
<script setup lang="ts">
import {NCard, NCheckbox, NText, NOptionsGroup, NSlideTransitionGroup} from '@nova-org/components'
import {ref} from 'vue'

const modelValue = ref<string[]>(['solo', 'backpacking', 'cruise'])
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
