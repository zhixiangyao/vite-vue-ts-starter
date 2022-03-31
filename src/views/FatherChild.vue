<script lang="tsx">
import { defineComponent, inject } from 'vue'

import { defaultDataKey } from '/@/provide'

import Father from '/@/components/Father.vue'
import Child from '/@/components/Child.vue'

const handleClick = (msg: string, event: MouseEvent) => {
  console.log(msg, event)
}

function FatherChild() {
  const defaultDataValue = inject(defaultDataKey)

  return () => (
    <>
      <p onClick={(event) => handleClick('hi', event)}>Provide-Inject: {defaultDataValue?.value}</p>

      <Father
        msg="Father"
        v-slots={{
          default: ({ name }: { [x: string]: string }) => <Child msg="Child" slotProp={name} />,
        }}
      />
    </>
  )
}

export default defineComponent(FatherChild)
</script>
