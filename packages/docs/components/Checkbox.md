<script setup>
import WithDescription from '../examples/components/checkbox/WithDescription.vue'
import BasicUsage from '../examples/components/checkbox/BasicUsage.vue'
import DisabledGroup from '../examples/components/checkbox/DisabledGroup.vue'
import DisabledOption from '../examples/components/checkbox/DisabledOption.vue'
import WithValidation from '../examples/components/checkbox/WithValidation.vue'
import WithDescriptionAndValidation from '../examples/components/checkbox/WithDescriptionAndValidation.vue'
import WithHint from '../examples/components/checkbox/WithHint.vue'
import Single from '../examples/components/checkbox/Single.vue'
import DisplayContainer from '../examples/partials/DisplayContainer.vue'
</script>

# Checkbox

Checkboxes enable users to choose multiple items from a list or mark a single item as selected.

## Import

Importing **NOptionsGroup** is not mandatory, but it provides a simple way of displaying **label**, **errors**,
**success state** and others.

```ts
import {NCheckbox, NOptionsGroup} from '@nova-org/components'
```

## Usage

When using multiple checkboxes, your **v-model** will become array of selected options.

<display-container>
    <basic-usage/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/checkbox/BasicUsage.vue#template [Template]
<<< @/examples/components/checkbox/BasicUsage.vue#script [Script]
:::

## Single

When using single checkbox, boolean value for **v-model** can be used.

<display-container vertical>
    <single/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/checkbox/Single.vue#template [Template]
<<< @/examples/components/checkbox/Single.vue#script [Script]
:::

### With description

Description is a simple way to provide additional information about options.

<display-container>
    <with-description/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/checkbox/WithDescription.vue#template [Template]
<<< @/examples/components/checkbox/WithDescription.vue#script [Script]
:::

### Disabled options group

Using **disabled** on **NOptionsGroup** disables all options inside.

<display-container>
    <disabled-group/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/checkbox/DisabledGroup.vue#template [Template]
<<< @/examples/components/checkbox/DisabledGroup.vue#script [Script]
:::

### Disabled options

Using **disabled** on **NCheckbox** disables only a concrete option.

<display-container>
    <disabled-option/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/checkbox/DisabledOption.vue#template [Template]
<<< @/examples/components/checkbox/DisabledOption.vue#script [Script]
:::

### With validation

<display-container>
    <with-validation/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/checkbox/WithValidation.vue#template [Template]
<<< @/examples/components/checkbox/WithValidation.vue#script [Script]
:::

### With description and validation

<display-container>
    <with-description-and-validation/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/checkbox/WithDescriptionAndValidation.vue#template [Template]
<<< @/examples/components/checkbox/WithDescriptionAndValidation.vue#script [Script]
:::

### With hint

<display-container>
    <with-hint/>
</display-container>

::: details Code
::: code-group
<<< @/examples/components/checkbox/WithHint.vue#template [Template]
<<< @/examples/components/checkbox/WithHint.vue#script [Script]
:::
