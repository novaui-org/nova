<!-- #region template -->
<template>
  <n-options-group label="Do you enjoy travelling">
    <n-checkbox v-model="modelValue" value="solo" label="I enjoy it with every part of my body"/>
  </n-options-group>

  <div>
    <n-text font-size="paragraph" weight="medium" :text="'Model value:'"/>
    {{ modelValue }}
  </div>
</template>
<!-- #endregion template -->

<!-- #region script -->
<script setup lang="ts">
import {NCheckbox, NOptionsGroup, NText} from '@nova-org/components'
import {ref} from 'vue'

const modelValue = ref(false)
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
