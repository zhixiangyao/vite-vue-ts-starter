<template>
  <canvas ref="EmitterCanvas" width="600" height="600" id="emitter-canvas"></canvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useEmitter } from '/@/hooks'

export default defineComponent({
  name: 'Particle',
  setup() {
    const EmitterCanvas = useEmitter()

    return { EmitterCanvas }
  },
})
</script>
