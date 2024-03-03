# Divider

<script setup>
import {NDivider, NText, NCard} from '@nova/components'
</script>

## Usage

### Variant

<n-card variant="flat" class="n-mb-32 n-mt-16" style="width: 400px;">
    <n-text weight="medium" type="h6" htmlTag="div" v-text="'First'" />
    <n-divider />
    <n-text weight="medium" type="h6" htmlTag="div" v-text="'Second'" />
    <n-divider />
    <n-text weight="medium" type="h6" htmlTag="div" v-text="'Third'" />
</n-card>


<div class="n-mb-32 n-mt-16" style="display: flex; flex-direction: row; gap: 16px;">
    <n-text weight="medium" type="h6" htmlTag="div" v-text="'First'" />
    <n-divider  vertical />
    <n-text weight="medium" type="h6" htmlTag="div" v-text="'Second'" />
    <n-divider vertical />
    <n-text weight="medium" type="h6" htmlTag="div" v-text="'Third'" />
</div>
