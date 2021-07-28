<script lang="tsx">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  toRefs,
} from 'vue'

export default defineComponent({
  name: 'Child',
  props: {
    msg: {
      type: String,
    },
    slotProp: {
      type: String,
    },
  },
  setup(props) {
    console.info(`👦Child: beforeCreate-1`)

    const { msg, slotProp } = toRefs(props)

    onBeforeMount(() => {
      console.info(`👦Child: beforeMount`)
    })
    onMounted(() => {
      console.info(`👦Child: mounted`)
    })
    onBeforeUpdate(() => {
      console.info(`👦Child: beforeUpdate`)
    })
    onUpdated(() => {
      console.info(`👦Child: updated`)
    })
    onBeforeUnmount(() => {
      console.info(`👦Child: beforeUnmount`)
    })
    onUnmounted(() => {
      console.info(`👦Child: unmounted`)
    })

    return () => (
      <>
        <p>Slot-Prop: {slotProp.value}</p>
        <div class="bg-blue-600 text-white p-2">{msg.value}</div>
      </>
    )
  },
  beforeCreate() {
    // 会被废弃 在 setup 后执行
    console.info(`👦Child: beforeCreate-2`)
  },
  created() {
    // 会被废弃 在 setup 后执行
    console.info(`👦Child: created-3`)
  },
})
</script>
