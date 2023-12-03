import {ref} from 'vue'
import {getNumericStyleProperty} from 'src/utils/dom-utils.ts'

export type RippleType = {
  key: string
  x: number
  y: number
  size: number
}

export function getUniqueID(prefix: string) {
  return `${prefix}-${Math.floor(Math.random() * 1000000)}`
}

export function useRipple() {
  const ripples = ref<RippleType[]>([])

  function onClick(event: MouseEvent) {
    if (!(event.currentTarget instanceof HTMLElement)) return
    const trigger = event.currentTarget

    const size = Math.max(trigger.clientWidth, trigger.clientHeight)
    const rect = trigger.getBoundingClientRect()

    /* Calculate border offset */
    const borderTop = getNumericStyleProperty(trigger, 'border-top-width')
    const borderLeft = getNumericStyleProperty(trigger, 'border-left-width')

    ripples.value.push({
      key: getUniqueID(`ripples-${ripples.value.length}`),
      size,
      x: event.clientX - rect.x - (size / 2) - borderLeft,
      y: event.clientY - rect.y - (size / 2) - borderTop,
    })
  }

  function onClear(key: string) {
    ripples.value = ripples.value.filter(ripple => ripple.key !== key)
  }

  return {
    ripples,
    onClick,
    onClear,
  }
}



