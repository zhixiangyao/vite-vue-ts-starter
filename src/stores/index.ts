import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const count = ref(0)
  const title = 'Vite + Vue'
  const getTitle = computed(() => title + count.value)

  function increment() {
    count.value++
  }

  return { count, getTitle, increment }
})
