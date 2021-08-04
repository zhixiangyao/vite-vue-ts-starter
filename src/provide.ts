import type { InjectionKey, Ref } from 'vue'

const defaultDataKey: InjectionKey<Ref<string>> = Symbol('default-page-data-key')

export { defaultDataKey }
