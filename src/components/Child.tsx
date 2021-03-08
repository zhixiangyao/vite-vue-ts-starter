export default defineComponent({
  name: 'Child',
  props: {
    msg: {
      type: String,
    },
  },
  setup(props) {
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
    console.info(`👦Child: beforeCreate`)
  },
  created() {
    console.info(`👦Child: created`)
  },
})

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
