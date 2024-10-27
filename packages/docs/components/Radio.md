<script setup>
import WithDescription from '../examples/components/radio/WithDescription.vue'
import BasicUsage from '../examples/components/radio/BasicUsage.vue'
import DisabledGroup from '../examples/components/radio/DisabledGroup.vue'
import DisabledOption from '../examples/components/radio/DisabledOption.vue'
import WithValidation from '../examples/components/radio/WithValidation.vue'
import WithDescriptionAndValidation from '../examples/components/radio/WithDescriptionAndValidation.vue'
import WithHint from '../examples/components/radio/WithHint.vue'
import DisplayContainer from '../examples/partials/DisplayContainer.vue'
import PropsTable from '../examples/partials/PropsTable.vue'
import SlotsTable from '../examples/partials/SlotsTable.vue'
</script>

# Radio

Radio Groups let users choose one option from a selection of mutually exclusive items.

## Import

Importing **NOptionsGroup** is not mandatory, but it provides a simple way of displaying **label**, **errors**,
**success state** and others.

```ts
import {NRadio, NOptionsGroup} from '@nova-org/components'
```

## Usage

<display-container>
    <basic-usage/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/radio/BasicUsage.vue#template [Template]
<<< @/examples/components/radio/BasicUsage.vue#script [Script]
:::

### With description

Description is a simple way to provide additional information about options.

<display-container>
    <with-description/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/radio/WithDescription.vue#template [Template]
<<< @/examples/components/radio/WithDescription.vue#script [Script]
:::

### Disabled options group

Using **disabled** on **NOptionsGroup** disables all options inside.

<display-container>
    <disabled-group/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/radio/DisabledGroup.vue#template [Template]
<<< @/examples/components/radio/DisabledGroup.vue#script [Script]
:::

### Disabled options

Using **disabled** on **NRadio** disables only a concrete option.

<display-container>
    <disabled-option/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/radio/DisabledOption.vue#template [Template]
<<< @/examples/components/radio/DisabledOption.vue#script [Script]
:::

### With validation

<display-container>
    <with-validation/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/radio/WithValidation.vue#template [Template]
<<< @/examples/components/radio/WithValidation.vue#script [Script]
:::

### With description and validation

<display-container>
    <with-description-and-validation/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/radio/WithDescriptionAndValidation.vue#template [Template]
<<< @/examples/components/radio/WithDescriptionAndValidation.vue#script [Script]
:::

### With hint

<display-container>
    <with-hint/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/radio/WithHint.vue#template [Template]
<<< @/examples/components/radio/WithHint.vue#script [Script]
:::

## Radio API

### Props

<props-table class="n-mt-24" path="components/NRadio.json"/>

### Slots

<slots-table class="n-mt-24" path="components/NRadio.json"/>

## Options group API

### Props

<props-table class="n-mt-24" path="components/NOptionsGroup.json"/>

### Slots

<slots-table class="n-mt-24" path="components/NOptionsGroup.json"/>

