<template>
  <presence>
    <motion
      v-show="visible"
      :exit="{ height: 0, margin: 0, padding: 0 }"
      :transition="{ easing: [0.25, 0.8, 0.5, 1], duration: 0.3 }"
      class="n-slide-transition"
    >
      <slot/>
    </motion>
  </presence>
</template>

<script setup lang="ts">
import {Presence, Motion} from '@oku-ui/motion'
import {NSlideTransitionProps} from 'src/components/NSlideTransition/types.ts'

defineProps<NSlideTransitionProps>()
</script>

<style scoped lang="scss">
.n-slide-transition {
  overflow: hidden;
}
</style>
