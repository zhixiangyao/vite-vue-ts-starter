<template>
  <Nav>
    <template #title>
      <div :class="[...baseClassStyle, 'text-green-600', 'flex-shrink-0']">
        {{ `${store.state.title}` }}
      </div>
    </template>

    <template #default>
      <button
        v-for="{ id, label, name } of navbarList"
        :key="id"
        :class="[
          name === routeName && 'bg-gray-900',
          name !== routeName && 'text-gray-300',
          'text-white',
          'hover:bg-gray-700',
          ...baseClassStyle,
        ]"
        @click="router.push({ name })"
      >
        {{ label }}
      </button>
    </template>

    <template #info>
      <div :class="[...baseClassStyle, 'text-blue-600', 'flex-shrink-0']">
        {{ `当前路由名:${routeName}` }}
      </div>
      <div :class="[...baseClassStyle, 'text-red-600', 'flex-shrink-0']">
        {{ `环境: ${environment}` }}
      </div>
    </template>
  </Nav>

  <main class="main">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'
import { useRouter, useRoute, Router, RouteLocationNormalizedLoaded } from 'vue-router'
import { Store } from 'vuex'
import { State } from '/@/store/state'
import { useStore } from '/@/store/index'
import Nav from '/@/layout/Nav'

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
        label: 'demo-ref',
        name: 'TestOnePage',
      },
      {
        id: 2,
        label: 'demo-slot',
        name: 'TestTwoPage',
      },
      {
        id: 3,
        label: 'demo-router',
        name: 'TestThreePage',
      },
      {
        id: 3,
        label: 'demo-windi',
        name: 'TestFourPage',
      },
      {
        id: 4,
        label: 'TensileColumn',
        name: 'TensileColumn',
      },
    ]
    const store: Store<State> = useStore()
    const router: Router = useRouter()
    const route: RouteLocationNormalizedLoaded = useRoute()
    const routeName: Ref<any> = ref()
    const baseClassStyle = ref(['px-3', 'py-2', 'rounded-md', 'text-sm', 'font-medium'])

    // fetch the user information when params change
    watch(
      () => route.name,
      async (newParams) => {
        routeName.value = newParams
      },
    )

    const environment: unknown = import.meta.env?.VITE_APP_NODE_ENV ?? 'undefined'

    return { navbarList, environment, store, router, routeName, baseClassStyle }
  },
})
</script>

<style lang="postcss" scoped>
.main {
  @apply flex flex-col justify-center items-center;
  @apply min-h-screen pt-16;
}
</style>
