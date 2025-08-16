<script lang="tsx">
import Child from '~/components/Child.vue'
import Father from '~/components/Father.vue'
import { defaultDataKey } from '~/provide'

function handleClick(msg: string, event: MouseEvent) {
  console.log(msg, event)
}

function FatherChild() {
  const defaultDataValue = inject(defaultDataKey)

  return () => (
    <>
      <p onClick={event => handleClick('hi', event)}>
        Provide-Inject:
        {defaultDataValue?.value}
      </p>

      <Father
        msg="Father"
        v-slots={{
          default: ({ name }: { name: string }) => <Child msg="Child" slotProp={name} />,
        }}
      />
    </>
  )
}

export default defineComponent(FatherChild)
</script>
