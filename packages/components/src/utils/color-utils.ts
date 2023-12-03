import {getContrast} from 'color2k'

export function parseColor(color: string) {
  if (color.startsWith('n-')) return getComputedStyle(document.documentElement).getPropertyValue(`--${color}`)
  else return color
}

export function findMoreContrastiveColor(base: string, color1: string, color2: string) {
  const baseP = parseColor(base)
  const color1P = parseColor(color1)
  const color2P = parseColor(color2)

  return getContrast(baseP, color1P) >= getContrast(baseP, color2P) ? color1P : color2P
}
