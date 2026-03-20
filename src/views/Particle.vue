<script lang="ts" setup>
import { onBeforeRouteLeave } from 'vue-router'
import { Emitter } from '~/utils/emitter'

const EmitterCanvas = useTemplateRef<HTMLCanvasElement>('EmitterCanvas')

onMounted(() => {
  const emitter: Emitter = new Emitter(EmitterCanvas.value)
  emitter.init()
})

onBeforeRouteLeave(() => {
  const answer = window.confirm('你真的要离开吗！')
  if (!answer)
    return false
})
</script>

<template>
  <canvas id="emitter-canvas" ref="EmitterCanvas" width="600" height="600" />
</template>
