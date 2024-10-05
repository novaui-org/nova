import {defineConfig} from 'vitepress'
import {readdirSync, lstatSync, existsSync} from 'node:fs'
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
    externalLinkIcon: true,
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

function loadDirectoryEntries(title, directory) {
  const absolutePath = path.join(__dirname, `../${directory}`)

  /* Build link - if an index file exists */
  const link = existsSync(path.join(absolutePath, 'Index.md'))
    ? `/${directory}/Index`
    : existsSync(path.join(absolutePath, 'index.md'))
      ? `/${directory}/index`
      : undefined

  return {
    text: title,
    items: readdirSync(absolutePath).flatMap(directoryEntry => {
      /* Handle dirs recursively */
      const isDir = lstatSync(path.join(absolutePath, directoryEntry)).isDirectory()
      if (isDir) {
        return [loadDirectoryEntries(convertToSpacedString(directoryEntry), `${directory}/${directoryEntry}`)]
      }

      directoryEntry = directoryEntry.split('.')[0]

      /* Ignore index files */
      if (directoryEntry.toLowerCase() === 'index') {
        return []
      }

      /* Build link */
      return {text: convertToSpacedString(directoryEntry), link: `/${directory}/${directoryEntry}`}
    }).sort(compareStrings),
    link,
  }
}

function compareStrings(a, b) {
  const titleA = a.text.toLowerCase()
  const titleB = b.text.toLowerCase()
  if (titleA < titleB) return -1
  if (titleA > titleB) return 1
  return 0
}


