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
import {type NSlideTransitionProps} from './types'
import {useSlideTransition} from 'src/components/NSlideTransition/use-slide-transition'

const props = withDefaults(defineProps<NSlideTransitionProps>(), {
  duration: 300,
})
const {enterTransition, leaveTransition} = useSlideTransition(props)
</script>

<style scoped lang="scss">
</style>
