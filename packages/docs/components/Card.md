<script setup>
import DisplayContainer from '../examples/partials/DisplayContainer.vue'
import BasicUsage from '../examples/components/card/BasicUsage.vue'
import Variant from '../examples/components/card/Variant.vue'
import Hoverable from '../examples/components/card/Hoverable.vue'
import Radius from '../examples/components/card/Radius.vue'
import Colors from '../examples/components/card/Colors.vue'
import Sizes from '../examples/components/card/Sizes.vue'
import Slots from '../examples/components/card/Slots.vue'
import Divider from '../examples/components/card/Divider.vue'
import Composition from '../examples/components/card/Composition.vue'
import PropsTable from '../examples/partials/PropsTable.vue'
import SlotsTable from '../examples/partials/SlotsTable.vue'
</script>

# Card

A Card is a container designed to hold text, photos, and actions related to a single subject. It provides a cohesive
space for presenting information and interactive elements together.

## Import

```ts
import {NCard} from '@nova-org/components'
```

## Usage

<display-container>
    <basic-usage/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/BasicUsage.vue#template [Template]
<<< @/examples/components/card/BasicUsage.vue#script [Script]
<<< @/examples/components/card/BasicUsage.vue#style [Style]
:::

### Variant

<display-container>
    <variant/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/Variant.vue#template [Template]
<<< @/examples/components/card/Variant.vue#script [Script]
<<< @/examples/components/card/Variant.vue#style [Style]
:::

### Hoverable

<display-container>
    <hoverable/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/Hoverable.vue#template [Template]
<<< @/examples/components/card/Hoverable.vue#script [Script]
<<< @/examples/components/card/Hoverable.vue#style [Style]
:::

### Radius

<display-container>
    <radius/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/Radius.vue#template [Template]
<<< @/examples/components/card/Radius.vue#script [Script]
<<< @/examples/components/card/Radius.vue#style [Style]
:::

### Colors

<display-container>
    <colors/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/Colors.vue#template [Template]
<<< @/examples/components/card/Colors.vue#script [Script]
<<< @/examples/components/card/Colors.vue#style [Style]
:::

### Sizes

<display-container>
    <sizes/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/Sizes.vue#template [Template]
<<< @/examples/components/card/Sizes.vue#script [Script]
<<< @/examples/components/card/Sizes.vue#style [Style]
:::

### Slots

<display-container>
    <slots/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/Slots.vue#template [Template]
<<< @/examples/components/card/Slots.vue#script [Script]
<<< @/examples/components/card/Slots.vue#style [Style]
:::

### Divider

<display-container>
    <divider/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/Divider.vue#template [Template]
<<< @/examples/components/card/Divider.vue#script [Script]
<<< @/examples/components/card/Divider.vue#style [Style]
:::

### Composition

You can use other **Nova** components inside the card to compose a more complex card.

<display-container>
    <composition/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/card/Composition.vue#template [Template]
<<< @/examples/components/card/Composition.vue#script [Script]
<<< @/examples/components/card/Composition.vue#style [Style]
:::

## API

### Props

<props-table class="n-mt-24" path="components/NCard.json"/>

### Slots

<slots-table class="n-mt-24" path="components/NCard.json"/>
