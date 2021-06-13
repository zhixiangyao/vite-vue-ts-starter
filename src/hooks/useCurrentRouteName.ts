import { ref, watch, Ref } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export function useCurrentRouteName(): Ref<any> {
  const currentRouteName: Ref<any> = ref()
  const route: RouteLocationNormalizedLoaded = useRoute()

  // fetch the user information when params change
  watch(
    () => route.name,
    async (newParams) => {
      currentRouteName.value = newParams
    },
  )

  return currentRouteName
}
