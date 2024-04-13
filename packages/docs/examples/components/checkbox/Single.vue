<!-- #region template -->
<template>
  <div class="n-mb-32 n-mt-16">
    <div style="display: flex; gap: 16px;">
      <n-options-group label="Do you enjoy travelling">
        <n-checkbox v-model="modelValue" value="solo" label="I enjoy it with every part of my body"/>
      </n-options-group>
    </div>

    <div class="n-mt-8">
      <n-text font-size="paragraph" weight="medium" v-text="'Model value:'"/>
      {{ modelValue }}
    </div>
  </div>
</template>
<!-- #endregion template -->

<!-- #region script -->
<script setup lang="ts">
import {NCheckbox, NOptionsGroup, NText} from '@nova/components'
import {ref} from 'vue'

const modelValue = ref(false)
</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">

</style>
<!-- #endregion style -->
