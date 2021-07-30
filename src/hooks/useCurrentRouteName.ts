import { ref, watch, Ref } from 'vue'
import { useRoute } from 'vue-router'

import type { RouteLocationNormalizedLoaded } from 'vue-router'

export function useCurrentRouteName(): Ref<any> {
  const currentRouteName: Ref<any> = ref()
  const route: RouteLocationNormalizedLoaded = useRoute()

  watch(
    () => route.name,
    async (name) => {
      currentRouteName.value = name
    },
    { immediate: true },
  )

  return currentRouteName
}
