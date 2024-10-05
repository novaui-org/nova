<template>
  <Motion
    class="n-ripple"
    :initial="{transform: 'scale(0)', opacity: 0.35}"
    :animate="{transform: 'scale(2)', opacity: 0}"
    :exit="{opacity: 0}"
    :transition="{duration}"
    :style="styles"
    @motionstart="$emit('ripple:start', {event: $event, key: ripple.key})"
    @motioncomplete="$emit('ripple:end', {event: $event, key: ripple.key})"
  />
</template>

<script setup lang="ts">
import {Motion} from '@oku-ui/motion'
import {type NRippleEmits, type NRippleProps} from './types'
import {computed, type CSSProperties} from 'vue'

const props = withDefaults(defineProps<NRippleProps>(), {
  color: 'currentColor',
})

defineEmits<NRippleEmits>()

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

const duration = computed(() => clamp(0.01 * props.ripple.size, 0.2, props.ripple.size > 100 ? 0.75 : 0.5))

const styles = computed<CSSProperties>(() => {
  return {
    backgroundColor: props.color,
    top: `${props.ripple.y}px`,
    left: `${props.ripple.x}px`,
    width: `${props.ripple.size}px`,
    height: `${props.ripple.size}px`,
  }
})
</script>

<style scoped lang="scss">
.n-ripple {
  position: absolute;
  border-radius: 100%;
  transform-origin: center;
  pointer-events: none;
  z-index: 10;
}
</style>
