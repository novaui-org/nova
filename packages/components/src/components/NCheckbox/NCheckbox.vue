<template>
  <n-option
    class="n-checkbox"
    type="checkbox"
    :checked="checked"
    :value="value"
    :label="label"
    :name="name"
    :size="size"
    :description="description"
    :color="color"
    :disabled="disabled"
    @click="onClick"
  >
    <template #checkmark>
      <span class="n-checkbox__checkmark">
        <n-checkbox-icon v-if="checked"/>
      </span>
    </template>

    <!-- Pass all slots (including scopedSlots) to child component -->
    <template v-for="(_, name) in $slots" :key="name" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" :key="name"/>
    </template>
  </n-option>
</template>

<script setup lang="ts">
import {NCheckboxEmits, NCheckboxProps} from 'src/components/NCheckbox/types.ts'
import {computed} from 'vue'
import NCheckboxIcon from 'src/components/NCheckboxIcon/NCheckboxIcon.vue'
import NOption from 'src/components/NOption/NOption.vue'

const emit = defineEmits<NCheckboxEmits>()
const props = withDefaults(defineProps<NCheckboxProps>(), {
  size: 'md',
  color: 'n-primary',
})

const checked = computed<boolean>(() => Array.isArray(props.modelValue) ? props.modelValue.includes(props.value) : props.modelValue)

function onClick() {
  if (Array.isArray(props.modelValue)) {
    emit('update:modelValue', checked.value ? props.modelValue.filter(v => v !== props.value) : [...props.modelValue, props.value])
  } else {
    emit('update:modelValue', !checked.value)
  }
}
</script>

<style scoped lang="scss">
.n-checkbox {
  $n-checkbox-color: var(--n-option-color);

  .n-checkbox__checkmark {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: $n-space-20;
    height: $n-space-20;
    border-radius: 7.2px;

    transition-property: transform, color, background, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: ease;
    transition-duration: .25s;

    &:before {
      content: "";
      transition-property: transform, color, background, background-color, border-color, text-decoration-color, fill, stroke;
      transition-timing-function: ease;
      transition-duration: .25s;

      border-radius: 7.2px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      border: 2px solid;
      border-color: $n-default-20;
    }

    &:after {
      content: "";
      transition-property: transform, opacity, background-color;
      transition-timing-function: ease;
      transition-duration: .25s;
      transform-origin: center;

      border-radius: 7.2px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      transform: scale(0.5);
      opacity: 0;
      background-color: $n-checkbox-color;
    }

    :deep(.n-checkbox-icon) {
      z-index: 10;
    }
  }

  &.n-option__checked {
    .n-checkbox__checkmark {
      &:after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  &:hover {
    &:not(.n-option__checked) {
      .n-checkbox__checkmark {
        background-color: $n-default-5
      }
    }
  }

  &:active {
    &:not(.n-option__checked) {
      .n-checkbox__checkmark {
        background-color: $n-default-5
      }
    }

    .n-checkbox__checkmark {
      transform: scale(0.95);
    }
  }
}
</style>
