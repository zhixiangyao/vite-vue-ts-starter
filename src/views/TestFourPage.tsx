import { defineComponent } from 'vue'
import TailwindDemo from '/@/components/TailwindDemo'

export default defineComponent({
  name: 'TestFourPage',
  setup() {
    return () => (
      <>
        <TailwindDemo />
        <TailwindDemo />
      </>
    )
  },
})
