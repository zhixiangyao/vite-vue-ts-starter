import type { Ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { ref, watch } from 'vue'

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
