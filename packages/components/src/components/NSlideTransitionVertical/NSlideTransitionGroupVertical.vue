<template>
  <transition-group
    :css="false"
    :persisted="false"
    @enter="enterTransition"
    @leave="leaveTransition"
  >
    <slot/>
  </transition-group>
</template>

<script setup lang="ts">
import {useSlideTransitionVertical} from 'src/components/NSlideTransitionVertical/use-slide-transition-vertical'
import type {NSlideTransitionVerticalProps} from 'src/components/NSlideTransitionVertical/types'

const props = withDefaults(defineProps<NSlideTransitionVerticalProps>(), {
  duration: 300,
})
const {enterTransition, leaveTransition} = useSlideTransitionVertical(props)
</script>

<style scoped lang="scss">
</style>
