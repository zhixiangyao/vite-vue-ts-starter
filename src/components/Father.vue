<script lang="tsx">
import { renderSlot } from 'vue'

export default defineComponent({
  name: 'Father',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    console.info(`👨Father: beforeCreate-1`)
    onBeforeMount(() => console.info(`👨Father: beforeMount`))
    onMounted(() => console.info(`👨Father: mounted`))
    onBeforeUpdate(() => console.info(`👨Father: beforeUpdate`))
    onUpdated(() => console.info(`👨Father: updated`))
    onBeforeUnmount(() => console.info(`👨Father: beforeUnmount`))
    onUnmounted(() => console.info(`👨Father: unmounted`))

    const obj = reactive({ name: 'yaozhixiang', sex: '男' })
    const { msg } = toRefs(props)
    const slots = useSlots()

    return () => (
      <div class="bg-red-600 text-white p-4">
        <div>{msg.value ?? 'default'}</div>
        {renderSlot(slots, 'default', obj)}
      </div>
    )
  },
  beforeCreate() {
    // 会被废弃 在 setup 后执行
    console.info(`👨Father: beforeCreate-2`)
  },
  created() {
    // 会被废弃 在 setup 后执行
    console.info(`👨Father: created-3`)
  },
})
</script>
