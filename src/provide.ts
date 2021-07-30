import type { InjectionKey, Ref } from 'vue'

const appDataKey: InjectionKey<Ref<string>> = Symbol('app-page-data-key')

export { appDataKey }
