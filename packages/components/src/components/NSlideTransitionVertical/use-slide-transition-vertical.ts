import type {NSlideTransitionProps} from 'src/components'
import {ref} from 'vue'

const CLOSED_SIZE = '0px'

interface initialStyle {
  height: string;
  width: string;
  position: string;
  visibility: string;
  overflow: string;
  paddingLeft: string;
  paddingRight: string;
  borderLeftWidth: string;
  borderRightWidth: string;
  marginLeft: string;
  marginRight: string;
}

function getElementStyle(element: HTMLElement) {
  const computedStyle = window.getComputedStyle(element)

  return {
    height: computedStyle.height,
    width: computedStyle.width,
    position: computedStyle.position,
    visibility: computedStyle.visibility,
    overflow: computedStyle.overflow,
    paddingLeft: computedStyle.paddingLeft,
    paddingRight: computedStyle.paddingRight,
    borderLeftWidth: computedStyle.borderLeftWidth,
    borderRightWidth: computedStyle.borderRightWidth,
    marginLeft: computedStyle.marginLeft,
    marginRight: computedStyle.marginRight,
  }
}

function getEnterKeyframes(width: string, initialStyle: initialStyle) {
  return [
    {
      width: CLOSED_SIZE,
      height: CLOSED_SIZE,
      opacity: 0,
      paddingLeft: CLOSED_SIZE,
      paddingRight: CLOSED_SIZE,
      borderLeftWidth: CLOSED_SIZE,
      borderRightWidth: CLOSED_SIZE,
      marginLeft: CLOSED_SIZE,
      marginRight: CLOSED_SIZE,
    },
    {
      width,
      height: initialStyle.height || 0,
      opacity: 1,
      paddingLeft: initialStyle.paddingLeft || 0,
      paddingRight: initialStyle.paddingRight || 0,
      borderLeftWidth: initialStyle.borderLeftWidth || 0,
      borderRightWidth: initialStyle.borderRightWidth || 0,
      marginLeft: initialStyle.marginLeft || 0,
      marginRight: initialStyle.marginRight || 0,
    },
  ]
}

function animateTransition(
  element: HTMLElement,
  initialStyle: initialStyle,
  done: () => void,
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
  options?: number | KeyframeAnimationOptions,
) {
  const animation = element.animate(keyframes, options)
  /* Set height to 'auto' to restore it after animation */
  element.style.height = initialStyle.height
  animation.onfinish = () => {
    element.style.overflow = initialStyle.overflow
    done()
  }

  return animation
}

export function useSlideTransitionVertical(props: NSlideTransitionProps) {
  function enterTransition(element: Element, doneCallback: () => void) {
    const initialStyle = getElementStyle(<HTMLElement>element)

    const {width} = getComputedStyle(<HTMLElement>element)
    ;(<HTMLElement>element).style.width = width
    ;(<HTMLElement>element).style.overflow = 'hidden'

    const keyframes = getEnterKeyframes(width, initialStyle)
    const options = {duration: props.duration, easing: 'ease-in-out'}
    animateTransition(<HTMLElement>element, initialStyle, doneCallback, keyframes, options)
  }

  function leaveTransition(element: Element, doneCallback: () => void) {
    const initialStyle = getElementStyle(<HTMLElement>element)

    const {width} = getComputedStyle(<HTMLElement>element)
    ;(<HTMLElement>element).style.width = width
    ;(<HTMLElement>element).style.overflow = 'hidden'

    const keyframes = getEnterKeyframes(width, initialStyle).reverse()
    const options = {duration: props.duration, easing: 'ease-in-out'}
    animateTransition(<HTMLElement>element, initialStyle, doneCallback, keyframes, options)
  }

  return {
    enterTransition, leaveTransition,
  }
}
