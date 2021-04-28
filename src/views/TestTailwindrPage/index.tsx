import { defineComponent } from 'vue'

import TailwindDemo from './components/TailwindDemo'
import style from './index.module.css'

export default defineComponent({
  name: 'TestTailwindrPage',
  setup() {
    return {}
  },
  render() {
    return (
      <>
        <div class={style.test}>test</div>

        <TailwindDemo />
        <TailwindDemo />
      </>
    )
  },
})
