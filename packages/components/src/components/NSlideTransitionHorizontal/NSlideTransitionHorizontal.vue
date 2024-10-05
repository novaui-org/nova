<template>
  <transition
    :css="false"
    :persisted="false"
    @enter="enterTransition"
    @leave="leaveTransition"
  >
    <slot/>
  </transition>
</template>

<script setup lang="ts">
import {useSlideTransitionHorizontal} from 'src/components/NSlideTransitionHorizontal/use-slide-transition-horizontal'
import type {NSlideTransitionHorizontalProps} from 'src/components/NSlideTransitionHorizontal/types'

const props = withDefaults(defineProps<NSlideTransitionHorizontalProps>(), {
  duration: 300,
})
const {enterTransition, leaveTransition} = useSlideTransitionHorizontal(props)
</script>

<style scoped lang="scss">
</style>
