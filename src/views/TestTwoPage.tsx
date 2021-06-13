import { defineComponent } from 'vue'

import Father from '/@/components/Father'
import Child from '/@/components/Child'

export default defineComponent({
  name: 'TestTwoPage',
  components: {
    Father,
    Child,
  },
  setup() {
    return {}
  },
  render() {
    const slots = { default: () => <Child msg="Child" /> }

    return <Father msg="Father">{slots}</Father>
  },
})
