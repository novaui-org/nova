<template>
  <span v-if="cmp" class="n-icon" :style="styles">
    <component :is="cmp" width="100%" height="100%" :viewBox="viewBox"/>
  </span>
</template>

<script setup lang="ts">
import {defineAsyncComponent, ref, shallowRef, watch, computed, FunctionalComponent} from 'vue'
import {NIconProps} from './types.ts'
import iconMap from '../../assets/icons/index.ts'

const props = withDefaults(defineProps<NIconProps>(), {size: '16px', color: 'inherit'})
const cmp = shallowRef<FunctionalComponent | null>(null)
const viewBox = ref<string>('')

watch(
  () => props.name,
  () => {
    try {
      cmp.value = defineAsyncComponent(iconMap[props.name].import)
      viewBox.value = `0 0 ${iconMap[props.name].width} ${iconMap[props.name].height}`
    } catch (e) {
      if (process.env.DEBUGGING) console.error(`Icon ${props.name} not found!`)
    }
  },
  {immediate: true},
)

const styles = computed(() => ({
  width: props.size,
  height: props.size,
  color: parseColor(props.color),
}))

function parseColor(color: string) {
  if (color.startsWith('n-')) return getComputedStyle(document.documentElement).getPropertyValue(`--${color}`)
  else return color
}
</script>

<style scoped lang="scss">
.n-icon {
  display: inline-block;
  line-height: 0;
  text-align: center;

  :deep(svg) {
    * {
      stroke: currentColor !important;
    }
  }
}
</style>
