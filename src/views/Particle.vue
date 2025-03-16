<script lang="ts" setup>
import { onBeforeRouteLeave } from 'vue-router'
import { useEmitter } from '~/hooks'

const EmitterCanvas = useEmitter()

onBeforeRouteLeave(() => {
  const answer = window.confirm('你真的要离开吗！')
  if (!answer)
    return false
})
</script>

<template>
  <canvas id="emitter-canvas" ref="EmitterCanvas" width="600" height="600" />
</template>
