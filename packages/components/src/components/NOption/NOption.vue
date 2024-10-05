<template>
  <label
    class="n-option"
    :class="{'n-option__checked': checked, 'n-option--disabled': disabled}"
    :style="style"
  >
    <input
      :type="type"
      class="n-option__native"
      :name="name"
      :value="value"
      :checked="checked"
      @click.stop.prevent
    />

    <!-- Slot for checkmark -->
    <slot name="checkmark"/>

    <span class="n-option__label-container" :class="{'n-option__label-container--with-description': !!description}">
      <slot v-if="$slots.default" name="default"/>
      <span v-else-if="label" class="n-option__label" v-text="label"/>
      <span v-if="description" class="n-option__description" v-text="description"/>
    </span>
  </label>
</template>

<script setup lang="ts">
import {computed, type CSSProperties} from 'vue'
import {type NOptionProps} from './types'
import {parseColor} from 'src/utils'

const props = withDefaults(defineProps<NOptionProps>(), {
  size: 'md',
  color: 'n-primary',
})

const style = computed<CSSProperties>(() => {
  return {
    '--n-option-color': parseColor(props.color),
  }
})
</script>

<style scoped lang="scss">
.n-option {
  $n-option-color: var(--n-option-color);

  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: $n-space-8;
  padding: $n-space-8;
  margin: calc($n-space-8 * -1);
  position: relative;

  .n-option__native {
    position: absolute;
    pointer-events: none;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .n-option__label-container {
    display: flex;
    flex-direction: column;
    gap: $n-space-2;

    .n-option__label {
      line-height: 1.5;
      font-size: 1rem;
      color: $n-foreground;
      font-weight: 400;
    }

    .n-option__description {
      color: $n-default-50;
      line-height: 1.3;
      font-size: 0.875rem;
    }

    &.n-option__label-container--with-description {
      .n-option__label {
        font-weight: 500;
      }
    }
  }

  &.n-option--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
