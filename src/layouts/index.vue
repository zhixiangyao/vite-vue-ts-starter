<script lang="tsx">
import { defineComponent, provide, readonly, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import { useStore } from '/@/store/index'
import { useCurrentRouteName } from '/@/hooks'
import { defaultDataKey } from '/@/logic/provide'

import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
import ToggleButton from './components/ToggleButton.vue'

import type { Router } from '/@/types'

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
    id: 4,
    label: 'TensileColumn',
    name: 'TensileColumn',
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
    const store = useStore()
    const router: Router = useRouter()
    const routeName = useCurrentRouteName()

    const defaultDataValue = ref('从 default 注入的')
    provide(defaultDataKey, readonly(defaultDataValue))

    return () => (
      <>
        <Nav
          v-slots={{
            title: () => `${store.state.title}`,
            default: () =>
              navbarList.map(({ id, label, name }) => (
                <button
                  key={id}
                  class={[
                    name === routeName.value && 'bg-gray-900 dark:text-white',
                    name !== routeName.value && `text-gray-300`,
                    'hover:bg-gray-700 text-white dark:text-black flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium',
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
      </>
    )
  },
})
</script>
