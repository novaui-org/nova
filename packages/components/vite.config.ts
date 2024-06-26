import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'node:path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({defaultImport: 'component'}), dts()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/index.variables.scss";',
      },
    },
  },
  build: {
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Nova',
      // the name of the output files when the build is run
      fileName: 'nova',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@nova/icons', '@oku-ui/motion-nuxt', 'motion'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          '@nova/icons': 'NovaIcons',
          'motion': 'Motion',
        },
      },
    },
  },
})
