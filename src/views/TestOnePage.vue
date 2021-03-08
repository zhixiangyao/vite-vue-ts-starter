<template>
  <HelloWorld :msg="'Vue3 ref proxy响应数据！'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from '/@/components/HelloWorld.vue'

export default defineComponent({
  name: 'TestOnePage',
  components: {
    HelloWorld,
  },
  /**
   * 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
   * https://v3.cn.vuejs.org/guide/composition-api-setup.html#props
   * @param props
   * @param context
   * @returns
   */
  setup() {
    const environment: unknown = import.meta.env?.VITE_APP_NODE_ENV ?? 'undefined'

    return { environment }
  },
})
</script>
