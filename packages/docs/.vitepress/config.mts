import {defineConfig} from 'vitepress'
import {readdirSync} from 'node:fs'
import path from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nova',
  description: 'Nova docs',
  base: '/nova/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Docs', link: loadDirectoryEntries('Guide', 'guide').items[0].link},
      {text: 'Components', link: loadDirectoryEntries('Components', 'components').items[0].link},
    ],

    sidebar: [
      loadDirectoryEntries('Guide', 'guide'),
      loadDirectoryEntries('Components', 'components'),
      loadDirectoryEntries('Transitions', 'transitions'),
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/xmajzel/nova'},
      {icon: 'npm', link: 'https://www.npmjs.com/package/@nova-org/components'},
    ],
    editLink: {
      pattern: 'https://github.com/xmajzel/nova/tree/main/packages/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
    },
    outline: {
      level: 'deep',
    },
  },
  /* https://github.com/vitejs/vite/issues/819 */
  /* https://vitepress.dev/reference/site-config#vite */
  // vite: {
  //   optimizeDeps: {
  //     link: ['nova'],
  //   },
  // },
  /* https://stackoverflow.com/questions/60009780/import-global-sass-variables-into-vuepress-components */
  /* https://stackoverflow.com/questions/28283652/importing-sass-through-npm */
  /* https://github.com/vitejs/vite/issues/382 */
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@nova-org/components/scss/index.variables.scss";',
        },
      },
    },
    ssr: {
      noExternal: ['@oku-ui/motion'],
    },
  },
})

function convertToSpacedString(input: string): string {
  /* Add space between lowercase and uppercase letters */
  const spacedString = input.replace(/([a-z])([A-Z])/g, '$1 $2')

  /* Convert the string to lowercase and then capitalize the first word */
  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1).toLowerCase()
}

// TODO: Add loading recursively
//  - as well as support for index.md (case insensitive) (@see https://vitepress.dev/guide/markdown#internal-links)
function loadDirectoryEntries(title, directory) {
  return {
    text: title,
    items: readdirSync(path.join(__dirname, `../${directory}`)).map(fileName => {
      fileName = fileName.split('.')[0]
      return {text: convertToSpacedString(fileName), link: `/${directory}/${fileName}`}
    }).sort(compareStrings),
  }
}

function compareStrings(a, b) {
  const titleA = a.text.toLowerCase()
  const titleB = b.text.toLowerCase()
  if (titleA < titleB) return -1
  if (titleA > titleB) return 1
  return 0
}


