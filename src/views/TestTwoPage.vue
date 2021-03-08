<template>
  <Father msg="Father">
    <template #default>
      <Child msg="Child" />
    </template>
  </Father>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Father from '/@/components/Father'
import Child from '/@/components/Child'

export default defineComponent({
  name: 'TestTwoPage',
  components: {
    Father,
    Child,
  },
  /**
   * 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
   * https://v3.cn.vuejs.org/guide/composition-api-setup.html#props
   * @param props
   * @param context
   * @returns
   */
  setup() {
    return {}
  },
})
</script>
