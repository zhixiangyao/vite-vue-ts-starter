<script lang="tsx">
import { defineComponent, inject } from 'vue'

import { defaultDataKey } from '/@/provide'

import Father from '/@/components/Father.vue'
import Child from '/@/components/Child.vue'

export default defineComponent({
  name: 'FatherChild',
  setup() {
    const defaultDataValue = inject(defaultDataKey)

    return () => (
      <>
        <p>Provide-Inject: {defaultDataValue?.value}</p>
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
