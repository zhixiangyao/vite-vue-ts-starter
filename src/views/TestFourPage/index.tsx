import { defineComponent } from 'vue'
import TailwindDemo from './TailwindDemo'

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
