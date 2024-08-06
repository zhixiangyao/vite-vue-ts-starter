export const debounce = <T extends any[]>(
  func: (...args: T) => void,
  wait: number,
  immediate: boolean,
) => {
  let timeout: number | null = null

  return (...args: T) => {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    const callNow = immediate && !timeout
    if (timeout !== null) clearTimeout(timeout)
    timeout = window.setTimeout(later, wait)
    if (callNow) func(...args)
  }
}
