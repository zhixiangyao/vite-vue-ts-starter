<template>
  <canvas ref="EmitterCanvas" width="600" height="600" id="emitter-canvas" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useEmitter } from '/@/hooks'

export default defineComponent({
  name: 'Particle',
  setup() {
    const EmitterCanvas = useEmitter()

    onBeforeRouteLeave(() => {
      const answer = window.confirm('你真的要离开吗！')
      if (!answer) return false
    })

    return { EmitterCanvas }
  },
})
</script>
