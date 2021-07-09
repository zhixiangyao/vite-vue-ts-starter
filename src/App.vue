<template>
  <Nav>
    <template #title>
      <div class="text-green-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
        {{ `${store.state.title}` }}
      </div>
    </template>

    <template #default>
      <button
        v-for="{ id, label, name } of navbarList"
        :key="id"
        :class="[name === routeName && 'bg-gray-900', name !== routeName && 'text-gray-300']"
        class="hover:bg-gray-700 text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium"
        @click="router.push({ name })"
      >
        {{ label }}
      </button>
    </template>

    <template #info>
      <div class="text-blue-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
        {{ `当前路由名:${routeName}` }}
      </div>
    </template>
  </Nav>

  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '/@/store/index'
import { useCurrentRouteName } from '/@/hooks'

import type { State, Store } from '/@/types'
import type { Router } from '/@/types'

export default defineComponent({
  name: 'App',
  components: { Nav: defineAsyncComponent(() => import('/@/layout/Nav.vue')) },
  setup() {
    const navbarList = [
      {
        id: 1,
        label: 'ref',
        name: 'TestHelloWorld',
      },
      {
        id: 2,
        label: 'slot',
        name: 'TestFatherChild',
      },
      {
        id: 3,
        label: 'router',
        name: 'TestRouteLeave',
      },
      {
        id: 3,
        label: 'windi',
        name: 'TestTailwindrPage',
      },
      {
        id: 4,
        label: 'TensileColumn',
        name: 'TestTensileColumnPage',
      },
      {
        id: 5,
        label: 'Particle',
        name: 'TestParticlePage',
      },
    ]
    const store: Store<State> = useStore()
    const router: Router = useRouter()
    const routeName = useCurrentRouteName()

    return { navbarList, store, router, routeName }
  },
})
</script>

<style lang="postcss" scoped>
.main {
  @apply flex flex-col justify-center items-center;
  @apply min-h-screen pt-16;
}
</style>
