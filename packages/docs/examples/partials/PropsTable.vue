<template>
  <div class="props_table__container">
    <div class="props_table">
      <div class="props_table__header">
        <n-text font-size="small" weight="regular" v-text="'Property'"/>
        <n-text font-size="small" weight="regular" v-text="'Type'"/>
        <n-text font-size="small" weight="regular" v-text="'Default value'"/>
        <n-text font-size="small" weight="regular" v-text="'Description'"/>
      </div>

      <div class="props_table__content">
        <template v-for="(apiProp, index) in apiProps" :key="apiProp.name">
          <div class="props_table__row">
            <div class="props_table__row-property">
              <n-text font-size="paragraph-2" weight="medium" v-text="apiProp.name"/>
              <n-text
                :style="{color: apiProp.required ? '#EE09C8' : '#0970EE'}"
                font-size="paragraph-2"
                weight="light"
                v-text="apiProp.required ? 'required' : 'optional'"
              />
            </div>

            <div class="props_table__row-type">
              <template v-if="Array.isArray(apiProp.type)">
                <n-text
                  v-for="typeItem in apiProp.type"
                  :key="typeItem"
                  html-tag="div"
                  weight="medium"
                  font-size="small"
                  class="props_table__row-type-item"
                  v-text="typeItem"
                />
              </template>
              <n-text
                v-else
                html-tag="div"
                weight="medium"
                font-size="small"
                class="props_table__row-type-item"
                v-text="apiProp.type"
              />
            </div>
            <n-text
              class="props_table__row-default-value"
              weight="medium"
              font-size="small"
              v-text="apiProp.default ?? ' '"
            />
            <n-text
              class="props_table__row-type-description"
              weight="light"
              font-size="small"
              v-text="apiProp.description"
            />
          </div>
          <n-divider v-if="(index + 1) < apiProps.length"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, ref} from 'vue'
import {NText, NDivider} from '@nova-org/components'

const props = defineProps<{ path: string }>()
const apiProps = ref<{
  name: string,
  required?: boolean,
  description: string,
  default?: string | number | boolean,
  type: string | number | boolean | string[] | number[]
}[]>([])

onBeforeMount(async () => {
  const response = await fetch(`/nova/meta/${props.path}`).then(r => r.json())
  apiProps.value = Object.entries(response.props).reduce((acc, [name, value]) => {
    acc.push({name, ...value as object})
    return acc
  }, [])
})
</script>

<style scoped lang="scss">
.props_table__container {
  overflow-x: auto;

  .props_table {
    min-width: 650px;

    .props_table__header {
      display: flex;
      gap: $n-space-12;
      border-radius: $n-space-16;
      border: 1px solid #EBECEE;
      background: #F9FAFC;
      padding: $n-space-12;

      .n-text:first-child {
        width: 120px;
      }

      .n-text:nth-child(2) {
        width: 94px;
      }

      .n-text:nth-child(3) {
        width: 84px;
      }

      .n-text:last-child {
        flex: 1;
      }
    }

    .props_table__content {
      display: flex;
      flex-direction: column;
      gap: $n-space-12;
      margin-top: $n-space-8;
      padding: $n-space-8;

      .props_table__row {
        display: flex;
        gap: $n-space-12;
        align-items: center;

        > * {
          flex-shrink: 0;
        }

        .props_table__row-property {
          width: 124px;
          display: flex;
          flex-direction: column;
        }

        .props_table__row-type {
          width: 94px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: $n-space-4;

          .props_table__row-type-item {
            padding: $n-space-2 3px;
            border-radius: $n-space-4;
            background: #EEF1F6;
            line-height: 15px;
          }
        }

        .props_table__row-default-value {
          width: 84px;
        }

        .props_table__row-type-description {
          color: #6B7076;
          flex-shrink: 1;
        }
      }
    }
  }
}
</style>
