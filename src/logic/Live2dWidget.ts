const isIntel = () => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') as WebGLRenderingContext
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info') as WEBGL_debug_renderer_info

  return gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL).includes('Intel')
}

const initLive2dWidget = () => {
  if (isIntel()) return

  window?.L2Dwidget?.init({
    model: {
      scale: 0.5,
    },
    display: {
      position: 'right',
      width: 360,
      height: 520,
      hOffset: 0,
      vOffset: -20,
    },
    react: {
      opacityDefault: 0.7,
      opacityOnHover: 0.2,
    },
  })
}

export default initLive2dWidget
