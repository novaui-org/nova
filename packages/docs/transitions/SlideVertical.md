<script setup>
import DisplayContainer from '../examples/partials/DisplayContainer.vue'

import Single from '../examples/transitions/slide-vertical/Single.vue'
import Multiple from '../examples/transitions/slide-vertical/Multiple.vue'
</script>

# Slide transition - vertical

Slide transition (vertical) provides a simple way to **animate height** of single or multiple components or HTML
elements when using conditional rendering.

## Import

Both **NSlideTransition** and **NSlideTransitionGroup** can be used to **animate width**.

```ts
import {NSlideTransition, NSlideTransitionGroup} from '@nova-org/components'
```

## Usage - single

Slide transition (vertical) animates element's:

- **Height**
- **Margin** (top, bottom)
- **Padding** (top, bottom)
- **Flex gap** - when an element is placed inside a flexbox element with a gap property set, it will also animate it

<display-container vertical>
    <single/>
</display-container>

::: details Code
::: code-group
<<< @/examples/transitions/slide-vertical/Single.vue#template [Template]
<<< @/examples/transitions/slide-vertical/Single.vue#script [Script]
:::

## Usage - multiple

**NSlideTransitionGroup** can be used for animating height (including padding and margin) of multiple child elements.


<display-container vertical>
    <multiple/>
</display-container>

::: details Code
::: code-group
<<< @/examples/transitions/slide-vertical/Multiple.vue#template [Template]
<<< @/examples/transitions/slide-vertical/Multiple.vue#script [Script]
:::
