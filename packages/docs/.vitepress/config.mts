import {defineConfig} from 'vitepress'
import {readdirSync} from 'node:fs'
import path from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nova',
  description: 'Nova docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Examples', link: '/markdown-examples'},
    ],

    sidebar: [
      {
        text: 'Components',
        items: readdirSync(path.join(__dirname, '../components')).map(fileName => {
          fileName = fileName.split('.')[0]
          return {text: fileName, link: `/components/${fileName}`}
        }),
      },
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/xmajzel/nova'},
    ],
  },
  /* https://github.com/vitejs/vite/issues/819 */
  /* https://vitepress.dev/reference/site-config#vite */
  // vite: {
  //   optimizeDeps: {
  //     link: ['nova'],
  //   },
  // },
})
