import type { RouteLocationNormalizedLoaded } from 'vue-router'

import { useRoute } from 'vue-router'

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
