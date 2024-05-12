<template>
  <n-option
    class="n-radio"
    type="radio"
    :checked="checked"
    :value="value"
    :label="label"
    :name="name"
    :size="size"
    :description="description"
    :color="color"
    :disabled="disabled"
    @click="$emit('update:modelValue', value)"
  >
    <template #checkmark>
      <span class="n-radio__checkmark">
        <span class="n-radio__checkmark-inner"/>
      </span>
    </template>

    <!-- Pass all slots (including scopedSlots) to child component -->
    <template v-for="(_, name) in $slots" :key="name" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" :key="name"/>
    </template>
  </n-option>
</template>

<script setup lang="ts">
import {type NRadioEmits, type NRadioProps} from './types'
import NOption from '../NOption/NOption.vue'
import {computed} from 'vue'

defineEmits<NRadioEmits>()
const props = withDefaults(defineProps<NRadioProps>(), {
  size: 'md',
  color: 'n-primary',
})

const checked = computed<boolean>(() => props.modelValue === props.value)
</script>

<style scoped lang="scss">
.n-radio {
  $n-radio-color: var(--n-option-color);

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

  &.n-option__checked {
    .n-radio__checkmark {
      border-color: $n-radio-color;

      .n-radio__checkmark-inner {
        transform: scale(1);
        background-color: $n-radio-color;
      }
    }
  }

  &:hover {
    &:not(.n-option__checked) {
      .n-radio__checkmark {
        background-color: $n-default-5
      }
    }
  }

  &:active {
    &:not(.n-option__checked) {
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
