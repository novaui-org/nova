<template>
  <div
    class="n-card"
    :class="{
      [`n-card--${size}`]: true,
      [`n-card--radius-${radius}`]: true,
      [`n-card--variant-${variant}`]: true,
      ['n-card--hoverable']: hoverable
    }"
  >
    <div v-if="$slots.header" class="n-card__header">
      <slot name="header"/>
    </div>

    <n-divider v-if="['header', 'both'].includes(divider) && $slots.header && ($slots.default || $slots.footer)"/>

    <div class="n-card__body">
      <slot name="default"/>
    </div>

    <n-divider v-if="['footer', 'both'].includes(divider) && $slots.footer && $slots.default"/>

    <div v-if="$slots.footer" class="n-card__footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {NCardProps} from 'src/components/NCard/types.ts'
import {NDivider} from 'src/components'

withDefaults(defineProps<NCardProps>(), {
  radius: 'lg',
  variant: 'outline',
  hoverable: false,
  size: 'md',
  divider: 'none',
})
</script>

<style scoped lang="scss">
.n-card {
  $n-card-border-width: 1px;
  $n-button-hover-scale: 1.01;

  /* Hoverable */
  &.n-card--hoverable {
    cursor: pointer;
    transition: transform ease-in-out 200ms;

    &:hover {
      transform: scale($n-button-hover-scale);
    }
  }

  /* Radius */
  &.n-card--radius-full {
    border-radius: 9999px;
  }

  &.n-card--radius-sm {
    border-radius: $n-space-8;
  }

  &.n-card--radius-md {
    border-radius: $n-space-12;
  }

  &.n-card--radius-lg {
    border-radius: $n-space-14;
  }

  &.n-card--radius-none {
    border-radius: $n-space-none;
  }

  /* Variant */
  &.n-card--variant-outline {
    border: $n-card-border-width solid $n-divider;
  }

  &.n-card--variant-shadow-1 {
    box-shadow: 6px 0 15px 0 rgba(0, 0, 0, .03), 0 2px 30px 0 rgba(0, 0, 0, .08), 0 0 1px 0 rgba(0, 0, 0, .3);
  }

  &.n-card--variant-shadow-2 {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .05)
  }

  &.n-card--variant-flat {
    transition: box-shadow ease-in-out 200ms;

    &.n-card--hoverable:hover {
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .05)
    }
  }

  /* Size */
  &.n-card--sm {
    .n-card__body {
      padding: $n-space-4;
    }

    &.n-card--variant-flat {
      .n-card__body {
        padding: calc($n-space-4 + $n-card-border-width);
      }
    }
  }

  &.n-card--md {
    .n-card__body, .n-card__header, .n-card__footer {
      padding: $n-space-8;
    }

    &.n-card--variant-flat {
      .n-card__body {
        padding: calc($n-space-8 + $n-card-border-width);
      }
    }
  }

  &.n-card--lg {
    .n-card__body, .n-card__header, .n-card__footer {
      padding: $n-space-12;
    }

    &.n-card--variant-flat {
      .n-card__body, .n-card__header, .n-card__footer {
        padding: calc($n-space-12 + $n-card-border-width);
      }
    }
  }
}
</style>
