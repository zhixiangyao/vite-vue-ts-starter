<script lang="tsx">
import { defineComponent } from 'vue'

import TailwindDemo from './components/TailwindDemo.vue'

export default defineComponent({
  name: 'TestTailwindrPage',
  setup() {
    return () => (
      <>
        <div class="w-full bg-violet-400">test</div>

        <TailwindDemo />
        <TailwindDemo />
      </>
    )
  },
})
</script>
