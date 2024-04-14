# Button

<script setup>
import {NButton, NIcon} from '@nova-org/components'
</script>

## Usage

### Colors

<div class="n-mb-32 n-mt-16">
    <n-button background-color="n-default" label="Default" class="n-mr-16" />
    <n-button background-color="n-primary" label="Primary" class="n-mr-16" />
    <n-button background-color="n-secondary" label="Secondary" class="n-mr-16" />
    <n-button background-color="n-success" label="Success" class="n-mr-16" />
    <n-button background-color="n-warning" label="Warning" class="n-mr-16" />
    <n-button background-color="n-danger" label="Danger" class="n-mr-16" />
</div>

::: details Code

::: code-group

```vue [Template]

<div class="n-mb-32 n-mt-16">
  <n-button background-color="n-default" label="Default" class="n-mr-16"/>
  <n-button background-color="n-primary" label="Primary" class="n-mr-16"/>
  <n-button background-color="n-secondary" label="Secondary" class="n-mr-16"/>
  <n-button background-color="n-success" label="Success" class="n-mr-16"/>
  <n-button background-color="n-warning" label="Warning" class="n-mr-16"/>
  <n-button background-color="n-danger" label="Danger" class="n-mr-16"/>
</div>
```

```vue [Script]

<script setup>
  import {NButton} from '@nova-org/components'
</script>
```

:::

### Variants

<div class="n-mb-32 n-mt-16">
    <n-button variant="solid" label="Solid" class="n-mr-16" />
    <n-button variant="shadow" label="Shadow" class="n-mr-16" />
    <n-button variant="ghost" label="Ghost" class="n-mr-16" />
    <n-button variant="outline" label="Outline" class="n-mr-16" />
    <n-button variant="flat" label="Flat" class="n-mr-16" />
</div>

::: details Code

::: code-group

```vue [Template]

<div class="n-mb-32 n-mt-16">
  <n-button variant="solid" label="Solid" class="n-mr-16" />
  <n-button variant="shadow" label="Shadow" class="n-mr-16" />
  <n-button variant="ghost" label="Ghost" class="n-mr-16" />
  <n-button variant="outline" label="Outline" class="n-mr-16" />
  <n-button variant="flat" label="Flat" class="n-mr-16" />
</div>
```

```vue [Script]

<script setup>
  import {NButton} from '@nova-org/components'
</script>
```

:::

### Radius

<div class="n-mb-32 n-mt-16">
    <n-button radius="full" label="Full" class="n-mr-16" />
    <n-button radius="lg" label="Large" class="n-mr-16" />
    <n-button radius="md" label="Medium" class="n-mr-16" />
    <n-button radius="sm" label="Small" class="n-mr-16" />
    <n-button radius="none" label="None" class="n-mr-16" />
</div>

::: details Code

::: code-group

```vue [Template]

<div class="n-mb-32 n-mt-16">
  <n-button radius="full" label="Full" class="n-mr-16" />
  <n-button radius="lg" label="Large" class="n-mr-16" />
  <n-button radius="md" label="Medium" class="n-mr-16" />
  <n-button radius="sm" label="Small" class="n-mr-16" />
  <n-button radius="none" label="None" class="n-mr-16" />
</div>
```

```vue [Script]

<script setup>
  import {NButton} from '@nova-org/components'
</script>
```

:::

### Sizes

<div class="n-mb-32 n-mt-16">
    <n-button size="sm" label="Small" class="n-mr-16" />
    <n-button size="md" label="Medium" class="n-mr-16" />
    <n-button size="lg" label="Large" class="n-mr-16" />
</div>

::: details Code

::: code-group

```vue [Template]

<div class="n-mb-32 n-mt-16">
  <n-button size="sm" label="Small" class="n-mr-16" />
  <n-button size="md" label="Medium" class="n-mr-16" />
  <n-button size="lg" label="Large" class="n-mr-16" />
</div>
```

```vue [Script]

<script setup>
  import {NButton} from '@nova-org/components'
</script>
```

:::

### With icon

<div class="n-mb-32 n-mt-16">
    <n-button icon-left="vuesax/linear/add-circle" label="Icon left" class="n-mr-16" />
    <n-button icon-right="vuesax/linear/add-circle" label="Icon right" class="n-mr-16" />
    <n-button icon-left="vuesax/linear/add-circle" icon-right="vuesax/linear/add-circle" label="Icons both" class="n-mr-16" />
</div>

::: details Code

::: code-group

```vue [Template]

<div class="n-mb-32 n-mt-16">
  <n-button icon-left="vuesax/linear/add-circle" label="Icon left" class="n-mr-16" />
  <n-button icon-right="vuesax/linear/add-circle" label="Icon right" class="n-mr-16" />
  <n-button icon-left="vuesax/linear/add-circle" icon-right="vuesax/linear/add-circle" label="Icons both" class="n-mr-16" />
</div>
```

```vue [Script]

<script setup>
  import {NButton} from '@nova-org/components'
</script>
```

:::

### Icon only

<div class="n-mb-32 n-mt-16">
    <n-button background-color="n-primary" class="n-mr-16" >
        <n-icon name="vuesax/linear/watch" size="22px" />
    </n-button>
    <n-button background-color="n-primary"  class="n-mr-16" >
        <n-icon name="vuesax/linear/add-circle" size="22px" />
    </n-button>
    <n-button background-color="n-primary"  class="n-mr-16" >
        <n-icon name="vuesax/linear/airpods" size="22px" />
    </n-button>
</div>

::: details Code

::: code-group

```vue [Template]

<div class="n-mb-32 n-mt-16">
  <n-button background-color="n-primary" class="n-mr-16">
    <n-icon name="vuesax/linear/watch" size="22px"/>
  </n-button>
  <n-button background-color="n-primary" class="n-mr-16">
    <n-icon name="vuesax/linear/add-circle" size="22px"/>
  </n-button>
  <n-button background-color="n-primary" class="n-mr-16">
    <n-icon name="vuesax/linear/airpods" size="22px"/>
  </n-button>
</div>
```

```vue [Script]

<script setup>
  import {NButton} from '@nova-org/components'
</script>
```

:::
