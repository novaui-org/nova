import {defineConfig, type PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'node:path'
import dtsPlugin from 'vite-plugin-dts'
import {visualizer} from 'rollup-plugin-visualizer'
import {viteStaticCopy} from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({defaultImport: 'component'}) as PluginOption,
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/index.variables.scss',
          dest: 'scss',
        },
        {
          src: 'src/styles/variables/**',
          dest: 'scss/variables',
        },
        {
          src: 'src/components/**/*.json',
          dest: 'meta/components',
        },
      ],
    }),
    dtsPlugin({insertTypesEntry: true}) as PluginOption,
    visualizer({filename: './generated/stats.html'}) as PluginOption,
  ],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/index.variables.scss";',
        api: 'modern-compiler',
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
      external: ['vue', '@nova-org/icons', '@oku-ui/motion'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          '@nova-org/icons': 'NovaIcons',
          '@oku-ui/motion': 'Motion',
        },
      },
    },
  },
})
