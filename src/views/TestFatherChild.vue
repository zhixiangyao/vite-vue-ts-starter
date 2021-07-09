<script lang="tsx">
import { defineComponent } from 'vue'

import Father from '/@/components/Father.vue'
import Child from '/@/components/Child.vue'

export default defineComponent({
  name: 'TestFatherChild',
  setup() {
    const slots = { default: () => <Child msg="Child" /> }

    return () => <Father msg="Father">{slots}</Father>
  },
})
</script>
