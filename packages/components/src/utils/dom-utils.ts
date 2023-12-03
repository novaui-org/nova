export function getNumericStyleProperty(htmlElement: HTMLElement, property: string) {
  const style = getComputedStyle(htmlElement, null)
  return parseInt(style.getPropertyValue(property), 10)
}
