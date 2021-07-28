import { ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'

type AppDataValue = string

export { AppDataValue }

const appDataKey: InjectionKey<Ref<AppDataValue>> = Symbol('app-page-data-key')
const appDataValue: Ref<AppDataValue> = ref('从 app 注入的')

export { appDataKey, appDataValue }
