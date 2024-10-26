<!-- #region template -->
<template>
  <n-checkbox v-model="modelValue" label="Show card bellow"/>

  <n-slide-transition>
    <n-card v-if="modelValue" size="sm">
      <n-text weight="medium" font-size="paragraph" html-tag="div" :text="'Small'"/>
      <n-text weight="light" font-size="small" html-tag="div" :text="'Modern and responsive.'"/>
    </n-card>
  </n-slide-transition>
</template>
<!-- #endregion template -->

<!-- #region script -->
<script setup lang="ts">
import {NCard, NCheckbox, NSlideTransition, NText} from '@nova-org/components'
import {ref} from 'vue'

const modelValue = ref<boolean>(true)
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
