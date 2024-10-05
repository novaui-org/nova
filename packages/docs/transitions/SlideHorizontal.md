<script setup>
import DisplayContainer from '../examples/partials/DisplayContainer.vue'

import Single from '../examples/transitions/slide-horizontal/Single.vue'
import Multiple from '../examples/transitions/slide-horizontal/Multiple.vue'
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

[//]: # (TODO: Add animating flex - or wrap single into separate DIV)

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
