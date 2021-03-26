<template>
  <canvas ref="EmitterCanvas" width="600" height="600" id="emitter-canvas"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref } from 'vue'

import Emitter from './Emitter'

export default defineComponent({
  name: 'Particle',
  setup() {
    const EmitterCanvas: Ref<any> = ref(null)

    onMounted(() => {
      console.info(1)
      const emitter = new Emitter(EmitterCanvas.value)
      emitter.init()
    })

    return { EmitterCanvas }
  },
})
</script>
