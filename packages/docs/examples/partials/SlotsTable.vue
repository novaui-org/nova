<template>
  <div class="slots_table__container">
    <div class="slots_table">
      <div class="slots_table__header">
        <n-text font-size="small" weight="regular" :text="'Slot'"/>
        <n-text font-size="small" weight="regular" :text="'Description'"/>
      </div>

      <div class="slots_table__content">
        <template v-for="(apiSlot, index) in apiSlots" :key="apiSlot.name">
          <div class="slots_table__row">
            <n-text font-size="paragraph-2" weight="medium" :text="apiSlot.name"/>
            <n-text
              class="slots_table__row-type-description"
              weight="light"
              font-size="small"
              :text="apiSlot.description"
            />
          </div>
          <n-divider v-if="(index + 1) < apiSlots.length"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from 'vue'
import {NText, NDivider} from '@nova-org/components'

const props = defineProps<{ path: string }>()
const apiSlots = ref<{ name: string, description: string, }[]>([])

onBeforeMount(async () => {
  const response = await fetch(`/nova/meta/${props.path}`).then(r => r.json())
  apiSlots.value = Object.entries(response.slots).reduce((acc, [name, value]) => {
    acc.push({name, ...value as object})
    return acc
  }, [])
})
</script>

<style scoped lang="scss">
.slots_table__container {
  overflow-x: auto;

  .slots_table {
    min-width: 450px;

    .slots_table__header {
      display: flex;
      gap: $n-space-12;
      border-radius: $n-space-16;
      border: 1px solid #EBECEE;
      background: #F9FAFC;
      padding: $n-space-12;

      .n-text:first-child {
        width: 120px;
      }

      .n-text:last-child {
        flex: 1;
      }
    }

    .slots_table__content {
      display: flex;
      flex-direction: column;
      gap: $n-space-12;
      margin-top: $n-space-8;
      padding: $n-space-8;

      .slots_table__row {
        display: flex;
        gap: $n-space-12;
        align-items: center;

        > :first-child {
          width: 124px;
          flex-shrink: 0;
        }

        .slots_table__row-type-description {
          color: #6B7076;
          flex-shrink: 1;
        }
      }
    }
  }
}
</style>
