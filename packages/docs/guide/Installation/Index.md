<script setup>
import {NText, NCard} from '@nova-org/components'
import DisplayContainer from '../../examples/partials/DisplayContainer.vue'
</script>

# Installation

Using **Nova** is very straightforward thanks to the installation of single **@nova-org/components** package (and 2 more
core dependencies) which contains all the components.

## Requirements

- [Vue 3](https://vuejs.org/) or later
- [Oku Motion 0.3.4](https://motion.oku-ui.com/) or later

## Frameworks setup

<display-container variant="flat">
    <a href="./Quasar" style="width: calc(50% - 12px); align-items: center; text-decoration: none; color: inherit;">
        <n-card variant="flat" hoverable>
            <n-text weight="bolder" font-size="h3" html-tag="div" style="text-align: center" class="n-pb-32" v-text="'Quasar'"></n-text>
            <img style="width: 150px; margin: 0 auto" src="../../assets/quasar-logo.svg"></img>
        </n-card>    
    </a>
    <a href="./Vite" style="width: calc(50% - 12px); align-items: center; text-decoration: none; color: inherit;">
        <n-card variant="flat" hoverable>
            <n-text weight="bolder" font-size="h3" html-tag="div" style="text-align: center" class="n-pb-32" v-text="'Vite'"></n-text>
            <img style="width: 150px; margin: 0 auto" src="../../assets/vitejs-logo.svg"></img>
        </n-card>
    </a>
</display-container>



