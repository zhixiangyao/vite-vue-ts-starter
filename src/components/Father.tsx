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
  /**
   * 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
   * 如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来完成此操作
   * 如果 title 是可选的 prop，则传入的 props 中可能没有 title 。
   * 在这种情况下，toRefs 将不会为 title 创建一个 ref 。你需要使用 toRef 替代它
   *
   * https://v3.cn.vuejs.org/guide/composition-api-setup.html#props
   * @param props
   * @param context { attrs, slots, emit }
   * @returns
   */
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
