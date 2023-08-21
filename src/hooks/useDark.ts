import { ref, watchEffect, type Ref } from 'vue'

const useDark = () => {
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

const useToggle = (e: Ref<boolean>) => {
  return () => {
    e.value = !e.value
  }
}

export { useDark, useToggle }
