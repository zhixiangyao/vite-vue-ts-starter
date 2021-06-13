/**
 * 返回一个函数，只要该函数继续被调用，它就不会被触发。
 * 该函数将在不再被调用后被调用N毫秒。如果通过了“立即”，
 * 则触发前沿，而不是尾随。
 */
export function debounce(func: Function, wait: number, immediate: boolean) {
  let timeout: any = null
  return (...args: any[]) => {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func(...args)
  }
}
