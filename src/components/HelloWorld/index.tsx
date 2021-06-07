import { ref, defineComponent } from 'vue'
import style from './index.module.scss'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
  render() {
    return (
      <>
        <h1>{this.msg}</h1>

        <p>
          Recommended IDE setup:
          <a class={style.a} href="https://code.visualstudio.com/" target="_blank">
            VSCode
          </a>
          +
          <a
            class={style.a}
            href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
            target="_blank"
          >
            Vetur
          </a>
          or
          <a class={style.a} href="https://github.com/johnsoncodehk/volar" target="_blank">
            Volar
          </a>
          if using
          <code class={style.code}>&lt;script setup&gt;</code>
        </p>

        <p>
          See <code class={style.code}>README.md</code> for more information.
        </p>

        <p>
          <a class={style.a} href="https://vitejs.dev/guide/features.html" target="_blank">
            {' '}
            Vite Docs{' '}
          </a>
          |
          <a class={style.a} href="https://v3.vuejs.org/" target="_blank">
            Vue 3 Docs
          </a>
        </p>

        <button onClick={() => this.count++}>count is: {this.count}</button>
        <p>
          Edit
          <code class={style.code}>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </>
    )
  },
})
