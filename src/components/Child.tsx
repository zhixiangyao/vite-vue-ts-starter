import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  toRef,
} from 'vue'

export default defineComponent({
  name: 'Child',
  props: {
    msg: {
      type: String,
    },
  },
  setup(props) {
    console.info(`👦Child: beforeCreate-1`)

    const msg = toRef(props, 'msg')

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

    return () => <div>{msg.value}</div>
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
