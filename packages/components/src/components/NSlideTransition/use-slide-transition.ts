import type {NSlideTransitionProps} from 'src/components'
import {ref} from 'vue'

const CLOSED_SIZE = '0px'

interface initialStyle {
  height: string;
  width: string;
  position: string;
  visibility: string;
  overflow: string;
  paddingTop: string;
  paddingBottom: string;
  borderTopWidth: string;
  borderBottomWidth: string;
  marginTop: string;
  marginBottom: string;
}

function getElementStyle(element: HTMLElement) {
  const computedStyle = window.getComputedStyle(element)

  return {
    height: computedStyle.height,
    width: computedStyle.width,
    position: computedStyle.position,
    visibility: computedStyle.visibility,
    overflow: computedStyle.overflow,
    paddingTop: computedStyle.paddingTop,
    paddingBottom: computedStyle.paddingBottom,
    borderTopWidth: computedStyle.borderTopWidth,
    borderBottomWidth: computedStyle.borderBottomWidth,
    marginTop: computedStyle.marginTop,
    marginBottom: computedStyle.marginBottom,
  }
}


function prepareElement(element: HTMLElement, initialStyle: initialStyle) {
  const {width} = getComputedStyle(element)
  element.style.width = width
  element.style.position = 'absolute'
  element.style.visibility = 'hidden'
  element.style.height = ''
  const {height} = getComputedStyle(element)
  element.style.width = initialStyle.width
  element.style.position = initialStyle.position
  element.style.visibility = initialStyle.visibility
  element.style.height = CLOSED_SIZE
  element.style.overflow = 'hidden'
  return initialStyle.height && initialStyle.height != CLOSED_SIZE ? initialStyle.height : height
}

function getEnterKeyframes(height: string, initialStyle: initialStyle) {
  return [
    {
      height: CLOSED_SIZE,
      opacity: 0,
      paddingTop: CLOSED_SIZE,
      paddingBottom: CLOSED_SIZE,
      borderTopWidth: CLOSED_SIZE,
      borderBottomWidth: CLOSED_SIZE,
      marginTop: CLOSED_SIZE,
      marginBottom: CLOSED_SIZE,
    },
    {
      height,
      opacity: 1,
      paddingTop: initialStyle.paddingTop || 0,
      paddingBottom: initialStyle.paddingBottom || 0,
      borderTopWidth: initialStyle.borderTopWidth || 0,
      borderBottomWidth: initialStyle.borderBottomWidth || 0,
      marginTop: initialStyle.marginTop || 0,
      marginBottom: initialStyle.marginBottom || 0,
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

export function useSlideTransition(props: NSlideTransitionProps) {
  function enterTransition(element: Element, doneCallback: () => void) {
    const initialStyle = getElementStyle(<HTMLElement>element)
    const height = prepareElement(<HTMLElement>element, initialStyle)
    const keyframes = getEnterKeyframes(height, initialStyle)
    const options = {duration: props.duration, easing: 'ease-in-out'}

    animateTransition(<HTMLElement>element, initialStyle, doneCallback, keyframes, options)
  }

  function leaveTransition(element: Element, doneCallback: () => void) {
    const initialStyle = getElementStyle(<HTMLElement>element)
    const {height} = getComputedStyle(<HTMLElement>element)

    ;(<HTMLElement>element).style.height = height
    ;(<HTMLElement>element).style.overflow = 'hidden'

    const keyframes = getEnterKeyframes(height, initialStyle).reverse()
    const options = {duration: props.duration, easing: 'ease-in-out'}
    animateTransition(<HTMLElement>element, initialStyle, doneCallback, keyframes, options)
  }

  return {
    enterTransition, leaveTransition,
  }
}
