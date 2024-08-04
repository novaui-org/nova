<template>
  <div
    class="n-options-group"
    :class="{
      'n-options-group--disabled': disabled,
      'n-options-group--error': !!error,
    }"
  >
    <div class="n-options-group__label-container">
      <span class="n-options-group__label" v-text="label"/>

      <n-slide-transition :visible="error || success" variant="both">
        <n-icon
          :name="error ? errorIcon : successIcon"
          :color="error ? 'n-danger' : 'n-success'"
        />
      </n-slide-transition>
    </div>

    <div class="n-options-group__content">
      <slot/>
    </div>

    <n-slide-transition>
      <n-input-message
        v-if="error && errorMessage"
        class="n-options-group__message"
        variant="negative"
        :message="errorMessage"
      />
    </n-slide-transition>

    <n-slide-transition>
      <n-input-message v-if="!error && hint" class="n-options-group__message" :message="hint"/>
    </n-slide-transition>


  </div>
</template>

<script setup lang="ts">
import {type NOptionsGroupProps} from './types'
import NInputMessage from '../NInputMessage/NInputMessage.vue'
import NIcon from '../NIcon/NIcon.vue'
import NSlideTransition from '../NSlideTransition/NSlideTransition.vue'

withDefaults(defineProps<NOptionsGroupProps>(), {
  errorIcon: 'vuesax/linear/info-circle',
  successIcon: 'vuesax/linear/tick-circle',
})
</script>

<style scoped lang="scss">
.n-options-group {
  .n-options-group__label-container {
    display: flex;
    gap: $n-space-8;
    align-items: center;

    .n-options-group__label {
      display: inline-block;
      line-height: 1.5;
      font-size: 1rem;
      color: $n-default-50;
      font-weight: 400;
    }
  }

  .n-options-group__content {
    display: flex;
    flex-direction: column;
    gap: $n-space-8;
    margin-top: $n-space-8;
  }

  .n-options-group__message {
    margin-top: $n-space-8;
  }

  &.n-options-group--disabled {
    opacity: 0.5;
    pointer-events: none;

    .n-options-group__content {
      :deep(.n-radio.n-radio--disabled) {
        /* Prevent double changing of opacity for nested NRadio. */
        opacity: initial;
      }
    }
  }

  &.n-options-group--error {
    .n-options-group__label-container {
      .n-options-group__label {
        color: $n-danger-50;
      }
    }

    // TODO: Customize for checkbox also
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
