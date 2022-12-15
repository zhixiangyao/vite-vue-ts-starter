<script lang="tsx">
import { defineComponent, Teleport } from 'vue'
import { RouterView } from 'vue-router'
import Github from '/@/plugins/Github.vue'
import Live2dWidget from '/@/plugins/Live2dWidget.vue'

function App() {
  return () => (
    <>
      <RouterView />

      <Teleport to="#global-components">
        <Live2dWidget />

        <Github class="hidden xl:block" href="https://github.com/zhixiangyao/vite-vue-ts-starter" />
      </Teleport>
    </>
  )
}

export default defineComponent(App)
</script>
