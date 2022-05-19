<script lang="tsx">
import { defineComponent, provide, readonly, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import { useAppStore } from '/@/stores'
import { useCurrentRouteName } from '/@/hooks'
import { defaultDataKey } from '/@/provide'

import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
import ToggleButton from './components/ToggleButton.vue'

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
    const appStore = useAppStore()
    const router = useRouter()
    const routeName = useCurrentRouteName()
    const defaultDataValue = ref('从 default 注入的')

    provide(defaultDataKey, readonly(defaultDataValue))

    return () => (
      <>
        <Nav
          v-slots={{
            title: () => `${appStore.getTitle}`,
            default: () =>
              navbarList.map(({ id, label, name }) => (
                <button
                  key={id}
                  class={[
                    name === routeName.value ? 'dark:bg-gray-700 bg-black ' : `text-gray-300`,
                    'dark:hover:bg-gray-700 hover:bg-black text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium',
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
