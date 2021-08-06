<template>
  <div id="Live2dWidget" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

const isIntelGPU = () => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') as WebGLRenderingContext
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info') as WEBGL_debug_renderer_info

  return gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL).includes('Intel')
}

interface Live2dWidgetOption {
  display?: {
    position?: 'right' | 'top' | 'left' | 'buttom'
    width?: number
    height?: number
    hOffset?: number
    vOffset?: number
  }
  react?: {
    opacityDefault?: number
    opacityOnHover?: number
  }
}

export default defineComponent({
  name: 'Live2dWidget',
  setup() {
    const initLive2dWidget = (option: Live2dWidgetOption) => {
      if (isIntelGPU()) return

      window?.L2Dwidget?.init(option)
    }
    onMounted(() => {
      const height = 200

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
    return {}
  },
})
</script>
