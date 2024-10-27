<script setup>
import DisplayContainer from '../examples/partials/DisplayContainer.vue'

import Single from '../examples/transitions/slide-horizontal/Single.vue'
import Multiple from '../examples/transitions/slide-horizontal/Multiple.vue'
import PropsTable from '../examples/partials/PropsTable.vue'
import SlotsTable from '../examples/partials/SlotsTable.vue'
</script>

# Slide transition - horizontal

Slide transition (horizontal) provides a simple way to **animate width** of single or multiple components or HTML
elements when using conditional rendering.

## Import

Both **NSlideTransitionHorizontal** and **NSlideTransitionGroupHorizontal** can be used to **animate width**.

```ts
import {NSlideTransitionHorizontal, NSlideTransitionGroupHorizontal} from '@nova-org/components'
```

## Usage - single

Slide transition (horizontal) animates element's:

- **Width**
- **Margin** (left, right)
- **Padding** (left, right)
- **Flex gap** - when an element is placed inside a flexbox element with a gap property set, it will also animate it

<display-container>
    <single/>
</display-container>

::: details Code
::: code-group
<<< @/examples/transitions/slide-horizontal/Single.vue#template [Template]
<<< @/examples/transitions/slide-horizontal/Single.vue#script [Script]
:::

## Usage - multiple

**NSlideTransitionGroupHorizontal** can be used to animate width (including padding and margin) of multiple child
elements.


<display-container vertical>
    <multiple/>
</display-container>

::: details Code
::: code-group
<<< @/examples/transitions/slide-horizontal/Multiple.vue#template [Template]
<<< @/examples/transitions/slide-horizontal/Multiple.vue#script [Script]
<<< @/examples/transitions/slide-horizontal/Multiple.vue#style [Style]
:::

## API

### Props

<props-table class="n-mt-24" path="components/NSlideTransitionHorizontal.json"/>

### Slots

<slots-table class="n-mt-24" path="components/NSlideTransitionHorizontal.json"/>

