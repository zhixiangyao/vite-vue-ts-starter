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
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '/@/store/index'
import { useCurrentRouteName } from '/@/hooks'

import Nav from '/@/layout/Nav.vue'

import type { State, Store } from '/@/types'
import type { Router } from '/@/types'

export default defineComponent({
  name: 'App',
  components: {
    Nav,
  },
  /**
   * 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
   * https://v3.cn.vuejs.org/guide/composition-api-setup.html#props
   * @param props
   * @param context
   * @returns
   */
  setup() {
    const navbarList = [
      {
        id: 1,
        label: 'ref',
        name: 'TestOnePage',
      },
      {
        id: 2,
        label: 'slot',
        name: 'TestTwoPage',
      },
      {
        id: 3,
        label: 'router',
        name: 'TestThreePage',
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
