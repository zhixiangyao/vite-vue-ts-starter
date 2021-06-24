<script lang="tsx">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  toRef,
  renderSlot,
} from 'vue'

import type { Ref } from 'vue'

export default defineComponent({
  name: 'Father',
  props: {
    msg: {
      type: String,
    },
  },
  setup(props, { slots }) {
    console.info(`👨Father: beforeCreate-1`)

    onBeforeMount(() => {
      console.info(`👨Father: beforeMount`)
    })
    onMounted(() => {
      console.info(`👨Father: mounted`)
    })
    onBeforeUpdate(() => {
      console.info(`👨Father: beforeUpdate`)
    })
    onUpdated(() => {
      console.info(`👨Father: updated`)
    })
    onBeforeUnmount(() => {
      console.info(`👨Father: beforeUnmount`)
    })
    onUnmounted(() => {
      console.info(`👨Father: unmounted`)
    })
    const msg: Ref<string | undefined> = toRef(props, 'msg')

    return () => (
      <div>
        <div>{msg.value ?? 'default'}</div>
        <div>{renderSlot(slots, 'default')}</div>
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
