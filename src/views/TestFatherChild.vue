<script lang="tsx">
import { defineComponent, inject } from 'vue'

import { appDataKey } from '/@/provide'

import Father from '/@/components/Father.vue'
import Child from '/@/components/Child.vue'

export default defineComponent({
  name: 'TestFatherChild',
  setup() {
    const data = inject(appDataKey)

    return () => (
      <>
        <p>Provide-Inject: {data?.value}</p>
        <Father
          msg="Father"
          v-slots={{
            default: ({ name }: { [x: string]: string }) => <Child msg="Child" slotProp={name} />,
          }}
        />
      </>
    )
  },
})
</script>
