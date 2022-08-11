import { watchEffect, ref } from 'vue'

export function useDark() {
  const htmlClassList = document.documentElement.classList

  const isDark = ref(htmlClassList.contains('dark'))

  watchEffect(() => {
    if (isDark.value) {
      htmlClassList.add('dark')
    } else {
      htmlClassList.remove('dark')
    }
  })

  return isDark
}
