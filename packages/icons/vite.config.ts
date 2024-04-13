import {defineConfig} from 'vite'
import svgLoader from 'vite-svg-loader'
import path from 'node:path'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgLoader({defaultImport: 'component'}), dts()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src/'),
    },
  },
  build: {
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Nova icons',
      // the name of the output files when the build is run
      fileName: 'nova-icons',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
  },
})
