<script setup>
import Default from '../../examples/components/button/Default.vue'
import DisplayContainer from '../../examples/partials/DisplayContainer.vue'
</script>

# Vite

### Step 1 - install package

```bash
npm install @nova-org/components @nova-org/icons @oku-ui/motion
```

### Step 2 - import styles

```typescript
import '@nova-org/components/style.css'
```

### Step 3 - example usage

Everything is set-up, you are ready to use all available components and transitions from **Nova** library.

<display-container>
    <default/>
</display-container>

::: code-group
<<< @/examples/components/button/Default.vue#script [Script]
<<< @/examples/components/button/Default.vue#template [Template]
:::
