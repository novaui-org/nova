<script setup>
import Default from '../../examples/components/button/Default.vue'
import DisplayContainer from '../../examples/partials/DisplayContainer.vue'
</script>

# Quasar

### Step 1 - install package

```bash
npm install @nova-org/components @nova-org/icons @oku-ui/motion
```

### Step 2 - import styles

In your `quasar.config.js` add `~@nova-org/components/style.css` to CSS config.

::: code-group

```typescript [quasar.config.js]
module.exports = configure(function (/* ctx */) {
  return {
    // ...
    css: [
      // ...
      '~@nova-org/components/style.css', // [!code ++]
    ],
    // ...
  }
})
```

:::

### Step 3 - example usage

Everything is set-up, you are ready to use all available components and transitions from **Nova** library.

<display-container>
    <default/>
</display-container>

::: code-group
<<< @/examples/components/button/Default.vue#script [Script]
<<< @/examples/components/button/Default.vue#template [Template]
:::
