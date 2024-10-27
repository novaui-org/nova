<script setup>
import DisplayContainer from '../examples/partials/DisplayContainer.vue'
import BasicUsage from '../examples/components/icon/BasicUsage.vue'
import Search from '../examples/components/icon/Search.vue'
import PropsTable from '../examples/partials/PropsTable.vue'
</script>

# Icon

An Icon is a small graphic element used to visually represent an action, object, or idea. Icons enhance the user
interface by providing intuitive and recognizable symbols that can improve navigation and usability.

## Import

```ts
import {NIcon} from '@nova-org/components'
```

## Usage

<display-container>
    <basic-usage/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/icon/BasicUsage.vue#template [Template]
<<< @/examples/components/icon/BasicUsage.vue#script [Script]
:::

<search/>

## API

### Props

<props-table class="n-mt-24" path="components/NIcon.json"/>
