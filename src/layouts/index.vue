<script lang="tsx">
import { storeToRefs } from 'pinia'
import { defineComponent, provide, readonly, ref, Teleport } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import Github from './components/Github.vue'
import Main from './components/Main.vue'
import Navigation from './components/Navigation.vue'

import ToggleButton from './components/ToggleButton.vue'
import { useCurrentRouteName } from '/@/hooks'
import { defaultDataKey } from '/@/provide'
import { useAppStore } from '/@/stores'

const navbarList = [
  {
    id: 1,
    label: 'Home',
    name: 'Home',
  },
  {
    id: 2,
    label: 'FatherChild',
    name: 'FatherChild',
  },
  {
    id: 3,
    label: 'Tailwind',
    name: 'Tailwind',
  },
  {
    id: 5,
    label: 'Particle',
    name: 'Particle',
  },
]

export default defineComponent({
  name: 'Default',
  setup() {
    const appStore = useAppStore()
    const { getTitle } = storeToRefs(appStore)
    const router = useRouter()
    const routeName = useCurrentRouteName()
    const defaultDataValue = ref('从 default 注入的')

    provide(defaultDataKey, readonly(defaultDataValue))

    return () => (
      <>
        <Navigation
          v-slots={{
            title: () => `${getTitle.value}`,
            default: () =>
              navbarList.map(({ id, label, name }) => (
                <button
                  key={id}
                  class={[
                    name === routeName.value && 'activated',
                    'button text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium',
                  ]}
                  onClick={() => router.push({ name })}
                >
                  {label}
                </button>
              )),
            info: () => <ToggleButton />,
          }}
        />

        <Main>
          <RouterView />
        </Main>

        <Teleport to="#global-components">
          <Github class="xl:block" href="https://github.com/zhixiangyao/vite-vue-ts-starter" />
        </Teleport>
      </>
    )
  },
})
</script>

<style scoped>
.button {
  @apply hover:bg-black;
}

.button.activated {
  @apply bg-black;
}

html.dark .button {
  @apply hover:bg-gray-700;
}

html.dark .button.activated {
  @apply bg-gray-700;
}
</style>
