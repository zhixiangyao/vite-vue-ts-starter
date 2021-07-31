import { isIntelGPU } from '/@/utils'

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

const initLive2dWidget = (option: Live2dWidgetOption) => {
  if (isIntelGPU()) return
  window?.L2Dwidget?.init(option)
}

export default initLive2dWidget
