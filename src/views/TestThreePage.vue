<template>
  <div>离开当前页面会弹窗</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

export default defineComponent({
  name: 'TestThreePage',
  /**
   * 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
   * https://v3.cn.vuejs.org/guide/composition-api-setup.html#props
   * @param props
   * @param context
   * @returns
   */
  setup() {
    onBeforeRouteLeave(() => {
      const answer = window.confirm('你真的要离开吗！')
      // cancel the navigation and stay on the same page
      if (!answer) return false
    })

    return {}
  },
})
</script>
