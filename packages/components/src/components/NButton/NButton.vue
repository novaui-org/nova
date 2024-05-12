<template>
  <button
    class="n-button relative overflow-hidden transition-transform-colors-opacity"
    :class="{
    [`n-button--${size}`]: true,
    [`n-button--radius-${radius}`]: true,
    [`n-button--variant-${variant}`]: true
  }"
    :style="style"
    @click="handleOnClick"
  >
    <slot name="before"/>
    <n-icon v-if="iconLeft" :name="iconLeft" :size="iconSize"/>

    <n-text v-if="label" font-size="small" weight="medium" v-text="label"/>
    <slot v-else name="default"/>

    <n-icon v-if="iconRight" :name="iconRight" :size="iconSize"/>
    <slot name="after"/>

    <n-ripple v-for="ripple in ripples" :key="ripple.key" :ripple="ripple" @ripple:end="onClear($event.key)"/>
  </button>
</template>

<script setup lang="ts">
import {findMoreContrastiveColor, parseColor} from 'src/utils'
import {computed, type CSSProperties} from 'vue'
import {type NButtonEmits, type NButtonProps} from './types'
import NText from '../NText/NText.vue'
import NIcon from '../NIcon/NIcon.vue'
import {useRipple} from '../NRipple/use-ripple'
import NRipple from '../NRipple/NRipple.vue'
import {transparentize} from 'color2k'

const props = withDefaults(defineProps<NButtonProps>(), {
  size: 'md',
  disabled: false,
  backgroundColor: 'n-primary',
  radius: 'lg',
  variant: 'solid',
  ripple: true,
})

const emit = defineEmits<NButtonEmits>()
const {onClear, onClick, ripples} = useRipple()

const style = computed<CSSProperties>(() => {
  const backgroundColor = parseColor(props.backgroundColor)
  const textColor = !!props.textColor ? parseColor(props.textColor) : findMoreContrastiveColor(backgroundColor, 'n-foreground', 'n-background')

  return {
    '--n-button-color-bg': backgroundColor,
    '--n-button-color-bg-20': transparentize(backgroundColor, 0.8),
    '--n-button-color-bg-40': transparentize(backgroundColor, 0.6),
    '--n-button-color-fg': textColor,
  }
})

function handleOnClick(event: MouseEvent) {
  if (props.ripple) onClick(event)
  emit('click', event)
}
</script>

<style scoped lang="scss">
.n-button {
  $n-button-color-bg: var(--n-button-color-bg);
  $n-button-color-bg-20: var(--n-button-color-bg-20);
  $n-button-color-bg-40: var(--n-button-color-bg-40);
  $n-button-color-fg: var(--n-button-color-fg);
  $n-button-border-width: 2px;
  $n-button-hover-opacity: 0.8;
  $n-button-active-scale: 0.97;

  border: 0 solid transparent;
  vertical-align: middle;

  display: inline-flex;
  align-items: center;
  gap: $n-space-8;

  /* Size */
  &:hover {
    opacity: $n-button-hover-opacity;
  }

  &:active {
    transform: scale($n-button-active-scale);
  }


  /* Size */
  &.n-button--sm {
    padding: calc($n-space-4 + $n-button-border-width) calc($n-button-border-width + $n-space-12);
  }

  &.n-button--md {
    padding: calc($n-space-8 + $n-button-border-width) calc($n-button-border-width + $n-space-16);
  }

  &.n-button--lg {
    padding: calc($n-space-12 + $n-button-border-width) calc($n-button-border-width + $n-space-24);
  }

  /* Radius */
  &.n-button--radius-full {
    border-radius: 9999px;
  }

  &.n-button--radius-sm {
    border-radius: $n-space-8;
  }

  &.n-button--radius-md {
    border-radius: $n-space-12;
  }

  &.n-button--radius-lg {
    border-radius: $n-space-14;
  }

  &.n-button--radius-none {
    border-radius: $n-space-none;
  }

  /* Variant */
  &.n-button--variant-solid, &.n-button--variant-shadow, &.n-button--variant-ghost:hover {
    color: $n-button-color-fg;
    background-color: $n-button-color-bg;
  }

  &.n-button--variant-shadow {
    box-shadow: 0 10px 15px -3px $n-button-color-bg-40, 0 4px 6px -4px $n-button-color-bg-40;
  }

  &.n-button--variant-ghost, &.n-button--variant-outline {
    color: $n-button-color-bg;
    background-color: $n-button-color-fg;
    border: 2px solid $n-button-color-bg;

    /* Size */
    &.n-button--sm {
      padding: $n-space-4 $n-space-12;
    }

    &.n-button--md {
      padding: $n-space-8 $n-space-16;
    }

    &.n-button--lg {
      padding: $n-space-12 $n-space-24;
    }
  }

  &.n-button--variant-flat {
    color: $n-button-color-bg;
    background-color: transparent;

    &:hover {
      background-color: $n-button-color-bg-20
    }
  }
}
</style>
