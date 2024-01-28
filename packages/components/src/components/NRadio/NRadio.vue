<template>
  <label
    class="n-radio"
    :class="{'n-radio__checked': checked}"
    :style="style"
    @click="$emit('update:modelValue', value)"
  >
    <input
      type="radio"
      class="n-radio__native"
      :name="name"
      :value="value"
      :checked="checked"
    />

    <span class="n-radio__checkmark">
      <span class="n-radio__checkmark-inner"/>
    </span>

    <span class="n-radio__label-container">
      <slot v-if="$slots.default" name="default"/>
      <span v-else-if="label" class="n-radio__label" v-text="label"/>
      <span v-if="description" class="n-radio__description" v-text="description"/>
    </span>
  </label>
</template>

<script setup lang="ts">
import {NRadioEmits, NRadioProps} from 'src/components/NRadio/types.ts'
import {computed, CSSProperties} from 'vue'
import {parseColor} from 'src/utils'

defineEmits<NRadioEmits>()
const props = withDefaults(defineProps<NRadioProps>(), {
  size: 'md',
  color: 'n-primary',
})

const checked = computed<boolean>(() => props.modelValue === props.value)

const style = computed<CSSProperties>(() => {
  return {
    '--n-radio-color': parseColor(props.color),
  }
})
</script>

<style scoped lang="scss">
.n-radio {
  $n-radio-color: var(--n-radio-color);

  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: $n-space-8;

  .n-radio__checkmark {
    transition-property: transform, color, background, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: ease;
    transition-duration: .25s;

    display: inline-flex;
    border-radius: 9999px;
    width: $n-space-20;
    height: $n-space-20;
    border: 2px solid;
    border-color: $n-default-20;
    justify-content: center;
    align-items: center;

    .n-radio__checkmark-inner {
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: .25s;
      transform-origin: center;

      display: inline-flex;
      border-radius: 9999px;
      width: $n-space-8;
      height: $n-space-8;
      background-color: $n-radio-color;
      transform: scale(0);
    }
  }

  .n-radio__native {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .n-radio__label-container {
    display: flex;
    flex-direction: column;
    gap: $n-space-2;

    .n-radio__label {
      line-height: 1.3;
      font-size: 1rem;
      color: $n-foreground;
      font-weight: 500;
    }

    .n-radio__description {
      color: $n-default-50;
      line-height: 1.3;
      font-size: 0.875rem;
    }
  }

  &.n-radio__checked {
    .n-radio__checkmark {
      border-color: $n-radio-color;

      .n-radio__checkmark-inner {
        transform: scale(1);
        background-color: $n-radio-color;
      }
    }
  }

  &:hover {
    &:not(.n-radio__checked) {
      .n-radio__checkmark {
        background-color: $n-default-5
      }
    }
  }

  &:active {
    &:not(.n-radio__checked) {
      .n-radio__checkmark {
        background-color: $n-default-5
      }
    }

    .n-radio__checkmark {
      transform: scale(0.95);
    }
  }
}
</style>
