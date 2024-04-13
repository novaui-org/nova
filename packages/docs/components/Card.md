# Card

<script setup>
import {NCard, NButton, NText} from '@nova/components'
</script>

## Usage

### Variant

<div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px;">
    <n-card variant="outline" style="width: 400px;">Outline</n-card>
    <n-card variant="flat" style="width: 400px;">Flat</n-card>
    <n-card variant="shadow-1" style="width: 400px;">Shadow 1</n-card>
    <n-card variant="shadow-2" style="width: 400px;">Shadow 2</n-card>
</div>

### Hoverable

<div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px;">
    <n-card variant="outline" hoverable style="width: 400px;">Outline</n-card>
    <n-card variant="flat" hoverable style="width: 400px;">Flat</n-card>
    <n-card variant="shadow-1" hoverable style="width: 400px;">Shadow 1</n-card>
    <n-card variant="shadow-2" hoverable style="width: 400px;">Shadow 2</n-card>
</div>

### Radius

<div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px;">
    <n-card radius="full" style="width: 400px;">Full</n-card>
    <n-card radius="lg" style="width: 400px;">Large</n-card>
    <n-card radius="md" style="width: 400px;">Medium</n-card>
    <n-card radius="sm" style="width: 400px;" >Small</n-card>
    <n-card radius="none" style="width: 400px;">None</n-card>
</div>

### Colors

<div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px; flex-wrap: wrap">
    <n-card variant="shadow-1" class="n-text-black n-bg-default" style="width: 200px;" >Default</n-card>
    <n-card variant="shadow-1" class="n-text-white n-bg-primary" style="width: 200px;">Primary</n-card>
    <n-card variant="shadow-1" class="n-text-white n-bg-secondary" style="width: 200px;">Secondary</n-card>
    <n-card variant="shadow-1" class="n-text-white n-bg-success" style="width: 200px;">Success</n-card>
    <n-card variant="shadow-1" class="n-text-white n-bg-warning" style="width: 200px;">Warning</n-card>
    <n-card variant="shadow-1" class="n-text-white n-bg-danger" style="width: 200px;">Danger</n-card>
</div>

### Sizes

<div class="n-mb-32 n-mt-16" style="display: flex; gap: 16px; flex-wrap: wrap; align-items: start">
    <n-card size="sm" style="width: 200px;">Small</n-card>
    <n-card size="md" style="width: 200px;">Medium</n-card>
    <n-card size="lg" style="width: 200px;">Large</n-card>
</div>

### Slots

<div class="n-mb-32 n-mt-16">
    <n-card style="width: 400px;" >
        <template #header>Header</template>
        Default
        <template #footer>Footer</template>
    </n-card>
</div>

**Separator**

<div class="n-mb-32 n-mt-16">
    <n-card divider="header" hoverable variant="shadow-1" size="lg" style="width: 400px;" >
        <template #header>
          <n-text weight="medium" font-size="h5" html-tag="div" v-text="'🚀 Nova UI'"/>
          <n-text weight="light" font-size="small" html-tag="div" v-text="'Beautiful, fast and modern Vue 3 UI library.'"/>
        </template>
        Oriented towards simplicity and ultimate User experience.
        <template #footer>
            <n-button size="sm" label="Primary Action" class="n-mr-16" />
        </template>
    </n-card>
    <n-card divider="both" hoverable variant="shadow-1" size="lg" class="n-mt-24" style="width: 400px;" >
        <template #header>
          <n-text weight="medium" font-size="h5" html-tag="div" v-text="'🚀 Nova UI'"/>
          <n-text weight="light" font-size="small" html-tag="div" v-text="'Beautiful, fast and modern Vue 3 UI library.'"/>
        </template>
        Oriented towards simplicity and ultimate User experience.
        <template #footer>
            <n-button size="sm" label="Primary Action" class="n-mr-16" />
        </template>
    </n-card>    
<n-card divider="footer" hoverable variant="shadow-1" size="lg" class="n-mt-24" style="width: 400px;" >
        <template #header>
          <n-text weight="medium" font-size="h5" html-tag="div" v-text="'🚀 Nova UI'"/>
          <n-text weight="light" font-size="small" html-tag="div" v-text="'Beautiful, fast and modern Vue 3 UI library.'"/>
        </template>
        Oriented towards simplicity and ultimate User experience.
        <template #footer>
            <n-button size="sm" label="Primary Action" class="n-mr-16" />
        </template>
</n-card>
</div>
