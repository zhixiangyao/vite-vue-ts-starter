import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return { title: 'Vite + Vue', count: 3 }
  },
  getters: {
    getTitle: (state) => state.title + state.count,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
