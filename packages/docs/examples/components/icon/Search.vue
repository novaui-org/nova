<!-- #region template -->
<template>
  <n-card variant="flat" class="docs-search">
    <div class="docs-search__input-container">
      <n-text :text="'Search for icon'" font-size="small" weight="medium"/>

      <div class="docs-search__input-row">
        <input class="docs-search__input" type="search" v-model.lazy="modelValue"/>
        <n-button icon-right="vuesax/broken/search-normal-1" label="Search"/>
      </div>

    </div>

    <display-container>
      <n-card v-for="iconName in visibleIcons" :key="iconName" variant="flat" hoverable @click="copy(iconName)">
        <n-icon :name="iconName" size="25px"/>
        <template #footer>
          <n-text
            style="display: block"
            font-size="small"
            weight="medium"
            :text="iconName"
          />
          <n-slide-transition>
            <n-text
              v-if="iconName === copiedName"
              style="display: block"
              font-size="small"
              weight="medium"
              :text="'Copied'"
            />
          </n-slide-transition>
        </template>
      </n-card>
    </display-container>
  </n-card>
</template>
<!-- #endregion template -->

<!-- #region script -->
<script setup lang="ts">
import {NIcon, NCard, NText, NButton, NSlideTransition} from '@nova-org/components'
import NovaIcons from '@nova-org/icons'
import {computed, ref} from 'vue'
import DisplayContainer from '../../partials/DisplayContainer.vue'
import {Utils} from '@nova-org/components'

const modelValue = ref<string>('')
const copiedName = ref<string>('')
let cpTimeoutId: number = null

// TODO: Fix type
//(keyof typeof NovaIcons)
const iconsToShow = computed<any[]>(() => {
  if (!modelValue.value) return Object.keys(NovaIcons)
  return Object.keys(NovaIcons).filter(key => key.startsWith(modelValue.value) || key.includes(modelValue.value))
})

const visibleIcons = computed(() => iconsToShow.value.slice(0, 50))

function copy(iconName: string) {
  copiedName.value = iconName
  Utils.copyToClipboard(iconName)
  if (cpTimeoutId) clearTimeout(cpTimeoutId)
  cpTimeoutId = window.setTimeout(() => {
    copiedName.value = ''
  }, 1000)
}

</script>
<!-- #endregion script -->

<!-- #region style -->
<style scoped lang="scss">
.docs-search {

  .docs-search__input-container {
    display: flex;
    flex-direction: column;

    .docs-search__input-row {
      display: flex;
      gap: $n-space-12;
      align-items: center;

      .docs-search__input {
        border: 1px solid $n-dark-20;
        border-radius: $n-space-10;
        padding: $n-space-12;
        flex: 1;
      }
    }
  }
}
</style>
<!-- #endregion style -->
