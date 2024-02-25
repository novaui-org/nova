<template>
  <div
    class="n-radio-group"
    :class="{
      'n-radio-group--disabled': disabled,
      'n-radio-group--error': !!error,
    }"
    role="radiogroup"
  >
    <div class="n-radio-group__label-container">
      <span class="n-radio-group__label" v-text="label"/>

      <n-slide-transition :visible="error || success" variant="both">
        <n-icon
          :name="error ? errorIcon : successIcon"
          :color="error ? 'n-danger' : 'n-success'"
        />
      </n-slide-transition>
    </div>

    <div class="n-radio-group__content">
      <slot/>
    </div>

    <n-input-message class="n-radio-group__message" variant="negative" :visible="!!error" :message="errorMessage"/>
  </div>
</template>

<script setup lang="ts">
import {NRadioGroupProps} from 'src/components/NRadioGroup/types.ts'
import NInputMessage from 'src/components/NInputMessage/NInputMessage.vue'
import NIcon from 'src/components/NIcon/NIcon.vue'
import {NSlideTransition} from 'src/components'

withDefaults(defineProps<NRadioGroupProps>(), {
  errorIcon: 'vuesax/linear/warning-2',
  successIcon: 'vuesax/linear/tick-circle',
})
</script>

<style scoped lang="scss">
.n-radio-group {
  .n-radio-group__label-container {
    display: flex;
    gap: $n-space-8;
    align-items: center;

    .n-radio-group__label {
      display: inline-block;
      line-height: 1.5;
      font-size: 1rem;
      color: $n-default-50;
      font-weight: 400;
    }
  }

  .n-radio-group__content {
    display: flex;
    flex-direction: column;
    gap: $n-space-8;
    margin-top: $n-space-8;
  }

  .n-radio-group__message {
    margin-top: $n-space-8;
  }

  &.n-radio-group--disabled {
    opacity: 0.5;
    pointer-events: none;

    .n-radio-group__content {
      :deep(.n-radio.n-radio--disabled) {
        /* Prevent double changing of opacity for nested NRadio. */
        opacity: initial;
      }
    }
  }

  &.n-radio-group--error {
    .n-radio-group__label-container {
      .n-radio-group__label {
        color: $n-danger-50;
      }
    }

    :deep(.n-radio) {
      .n-radio__checkmark {
        border-color: $n-danger;

        .n-radio__checkmark-inner {
          background-color: $n-danger;
        }
      }

      .n-radio__label-container {
        .n-radio__label {
          color: $n-danger;
        }
      }
    }
  }
}
</style>
