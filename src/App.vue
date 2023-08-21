<script lang="tsx">
import { defineComponent, Teleport } from 'vue'
import { RouterView } from 'vue-router'
import Github from '/@/plugins/Github.vue'

function App() {
  return () => (
    <>
      <RouterView />

      <Teleport to="#global-components">
        <Github class="xl:block" href="https://github.com/zhixiangyao/vite-vue-ts-starter" />
      </Teleport>
    </>
  )
}

export default defineComponent(App)
</script>
