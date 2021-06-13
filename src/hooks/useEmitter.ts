import { ref, onMounted } from 'vue'
import Emitter from '/@/lib/Emitter'
import type { Ref } from 'vue'

export function useEmitter(): Ref<any> {
  const EmitterCanvas: Ref<any> = ref(null)

  onMounted(() => {
    const emitter: Emitter = new Emitter(EmitterCanvas.value)
    emitter.init()
  })

  return EmitterCanvas
}
