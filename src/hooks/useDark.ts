import type { Ref } from 'vue'
import { ref, watchEffect } from 'vue'

function useDark() {
  const htmlClassList = document.documentElement.classList

  const isDark = ref(htmlClassList.contains('dark'))

  watchEffect(() => {
    if (isDark.value) {
      htmlClassList.add('dark')
    }
    else {
      htmlClassList.remove('dark')
    }
  })

  return isDark
}

function useToggle(e: Ref<boolean>) {
  return () => {
    e.value = !e.value
  }
}

export { useDark, useToggle }
