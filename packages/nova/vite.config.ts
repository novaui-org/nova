import {defineConfig} from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  build: {
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: resolve(__dirname, 'src/index.ts'),
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
