import {defineConfig} from 'vite'
import {resolve} from 'node:path'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({defaultImport: 'component'})],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: path.resolve(__dirname, 'src/index.ts'), // TODO: update here
      name: 'Nova',
      // the name of the output files when the build is run
      fileName: 'nova',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
