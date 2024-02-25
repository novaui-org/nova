<template>
  <presence>
    <motion
      v-show="visible"
      :exit="exit"
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
import {computed} from 'vue'
import {VariantDefinition} from '@motionone/dom/types/state/types'

const props = withDefaults(defineProps<NSlideTransitionProps>(), {
  variant: 'vertical',
})

const exit = computed<VariantDefinition>(() => {
  switch (props.variant) {
    case 'vertical':
      return {height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, opacity: 0}
    case 'horizontal':
      return {width: 0, marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, opacity: 0}
    case 'both':
      return {scale: 0, opacity: 0}
  }
})
</script>

<style scoped lang="scss">
.n-slide-transition {
  overflow: hidden;
  line-height: 0;
  transform-origin: center;
}
</style>
