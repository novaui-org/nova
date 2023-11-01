import fs from 'node:fs'

const ICONS_DIR = './src/assets/icons'
const ICONS_DIR_ABS = '/src/assets/icons'
const ICONS_MAP_FILE = `${ICONS_DIR}/index.ts`
const DEBUG = !!process.env.DEBUGGING

function loadSvgPaths(path?: string): string[] {
  const currentDir = path ? `${ICONS_DIR}/${path}` : ICONS_DIR

  const dirContent = fs.readdirSync(currentDir)
  const loadedPaths: string[] = []

  dirContent.forEach(title => {
    const entryPath = path ? `${path}/${title}` : title

    let stats = fs.statSync(`${ICONS_DIR}/${entryPath}`)
    if (stats.isDirectory()) {
      loadedPaths.push(...loadSvgPaths(entryPath))
    } else {
      loadedPaths.push(entryPath)
    }
  })

  return loadedPaths
}

export function createIconObject(svgPaths: string[]) {
  const iconObject: Record<string, { width: number, height: number, fullPath: string }> = {}
  svgPaths.forEach(path => {
    const pathSplit = path.split('.')
    const fileExtension = pathSplit.pop()
    if (fileExtension !== 'svg') {
      if (DEBUG) console.warn(`UNSUPPORTED EXTENSTION: .${fileExtension} (${path})`)
      return
    }

    const svgContent = fs.readFileSync(`${ICONS_DIR}/${path}`, 'utf8')
    const sizes = svgContent.match(/width="(\d+)" .*height="(\d+)"/m) || ['', '24', '24']
    iconObject[pathSplit.join('.')] = {
      width: Number(sizes[1]),
      height: Number(sizes[2]),
      fullPath: `${ICONS_DIR_ABS}/${path}?component`,
    }
  })
  return iconObject
}

export function generateIconIndex(): void {
  const svgPaths = loadSvgPaths()
  const iconObject = createIconObject(svgPaths)

  let file: string = ''
  file += '/** This file was generated automatically using \'npm run icons:generate\'. */\n'
  file += 'export default {\n'
  for (const [key, value] of Object.entries(iconObject)) {

    file += `  '${key}':  { width: ${value.width}, height: ${value.height}, import: () => import('${value.fullPath}') },\n`
  }
  file += '}\n'
  // as Record<string, { width: number, height: number, import: () => Promise<any> }>
  fs.writeFileSync(ICONS_MAP_FILE, file, 'utf8')
  console.log(`Icon index generated successfully! (${ICONS_MAP_FILE})`)
}
