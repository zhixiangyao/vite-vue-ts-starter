<script lang="ts" setup>
import { onMounted } from 'vue'

const isIntelGPU = () => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl')!
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')!

  return gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL).includes('Intel')
}

const initLive2dWidget = (option: Live2dWidgetOption) => {
  if (isIntelGPU()) return

  window?.L2Dwidget?.init(option)
}

onMounted(() => {
  const height = Math.floor(document?.body?.clientHeight / 3)

  initLive2dWidget({
    display: {
      position: 'right',
      width: height * 0.7,
      height,
      hOffset: 20,
      vOffset: 20,
    },
    react: {
      opacityDefault: 0.7,
      opacityOnHover: 0.2,
    },
  })
})
</script>

<template>
  <div id="Live2dWidget" />
</template>
