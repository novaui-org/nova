<template>
  <component
    class="n-text"
    :class="{
    'n-text--ellipsis': !!visibleLines,
    [`n-${props.fontSize}--${props.weight}`]: true,
    }"
    :is="htmlTag"
    :style="style"
  >
    <slot v-if="$slots.default"/>
    <template v-else>
      {{ text }}
    </template>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {type NTextProps} from './types'

const props = withDefaults(
  defineProps<NTextProps>(),
  {
    weight: 'regular',
    fontSize: 'paragraph',
    htmlTag: 'span',
  },
)

const style = computed(() => {
  if (!Number.isNaN(props.visibleLines)) {
    return {
      '-webkit-line-clamp': props.visibleLines,
      'line-clamp': props.visibleLines,
    }
  }
  return {}
})
</script>

<style scoped lang="scss">
.n-text--ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
}
</style>
