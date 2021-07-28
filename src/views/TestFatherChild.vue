<script lang="tsx">
import { defineComponent } from 'vue'

import Father from '/@/components/Father.vue'
import Child from '/@/components/Child.vue'

export default defineComponent({
  name: 'TestFatherChild',
  setup() {
    return () => (
      <Father
        msg="Father"
        v-slots={{
          default: ({ name }: { [x: string]: unknown }) => {
            console.log('Slot Prop:', name)
            return <Child msg="Child" />
          },
        }}
      />
    )
  },
})
</script>
