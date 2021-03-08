import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { state, State } from '/@/store/state'

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
