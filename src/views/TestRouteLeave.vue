<template>
  <div>离开当前页面会弹窗</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

export default defineComponent({
  name: 'TestRouteLeave',
  setup() {
    onBeforeRouteLeave(() => {
      const answer = window.confirm('你真的要离开吗！')
      if (!answer) return false
    })

    return {}
  },
})
</script>
