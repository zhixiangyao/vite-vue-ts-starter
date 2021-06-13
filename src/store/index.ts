import { createStore, useStore as baseUseStore } from 'vuex'
import { state } from '/@/store/state'

import type { InjectionKey } from 'vue'
import type { State, Store } from '/#/store'

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state,
  mutations: {},
  actions: {},
  modules: {},
})

export function useStore() {
  return baseUseStore(key)
}
