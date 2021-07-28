<script lang="tsx">
import { defineComponent, inject } from 'vue'

import { appDataKey, appDataValue } from '/@/provide'

import Father from '/@/components/Father.vue'
import Child from '/@/components/Child.vue'

export default defineComponent({
  name: 'TestFatherChild',
  setup() {
    const data = inject(appDataKey)

    return () => (
      <>
        <div class=" border-red-300 p-1 m-2 border-1 rounded-10px">
          <p>Provide-Inject: {data?.value}</p>

          <textarea
            class="p-1 m-1 border-blue-300 border-3 rounded-10px"
            v-model={appDataValue.value}
          />
        </div>
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
