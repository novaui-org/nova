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
      {text: 'Docs', link: loadDirectoryEntries('Guide', 'guide').items[0].link},
      {text: 'Components', link: loadDirectoryEntries('Components', 'components').items[0].link},
    ],

    sidebar: [
      loadDirectoryEntries('Guide', 'guide'),
      loadDirectoryEntries('Components', 'components'),
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/xmajzel/nova'},
    ],
    editLink: {
      pattern: 'https://github.com/xmajzel/nova/tree/main/packages/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdated: {
      text: 'Laste updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },
  },
  /* https://github.com/vitejs/vite/issues/819 */
  /* https://vitepress.dev/reference/site-config#vite */
  // vite: {
  //   optimizeDeps: {
  //     link: ['nova'],
  //   },
  // },
})

function loadDirectoryEntries(title, directory) {
  return {
    text: title,
    items: readdirSync(path.join(__dirname, `../${directory}`)).map(fileName => {
      fileName = fileName.split('.')[0]
      return {text: fileName, link: `/${directory}/${fileName}`}
    }).sort(compareStrings),
  }
}

function compareStrings(a, b) {
  const titleA = a.title.toLowerCase()
  const titleB = b.title.toLowerCase()
  if (titleA < titleB) return -1
  if (titleA > titleB) return 1
  return 0
}


