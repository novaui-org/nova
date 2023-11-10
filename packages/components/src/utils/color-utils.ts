export function parseColor(color: string) {
  if (color.startsWith('n-')) return getComputedStyle(document.documentElement).getPropertyValue(`--${color}`)
  else return color
}

/* @see https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors */
const RED = 0.2126
const GREEN = 0.7152
const BLUE = 0.0722
const GAMMA = 2.4

function luminance(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA)
  })
  return a[0] * RED + a[1] * GREEN + a[2] * BLUE
}

export function colorsContrast(rgb1: [number, number, number], rgb2: [number, number, number]) {
  const lum1 = luminance(...rgb1)
  const lum2 = luminance(...rgb2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

/* @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
function rgbComponentToHex(c: number) {
  const hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

export function rgbToHex(r: number, g: number, b: number) {
  return '#' + rgbComponentToHex(r) + rgbComponentToHex(g) + rgbComponentToHex(b)
}

export function hexToRgb(hex: string) {
  /* Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF') */
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
}

