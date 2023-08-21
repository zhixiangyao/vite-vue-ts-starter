<script lang="tsx">
import { defineComponent, renderSlot, useSlots } from 'vue'

import { useAppStore } from '/@/stores'

export default defineComponent({
  name: 'Navigation',
  setup() {
    const slots = useSlots()
    const appStore = useAppStore()

    return () => (
      <nav class="nav bg-gray-700 fixed top-0 left-0 w-screen z-10">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16 overflow-x-auto overflow-y-hidden">
            <div
              class="text-green-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium cursor-pointer select-none"
              onClick={() => appStore.increment()}
            >
              {renderSlot(slots, 'title')}
            </div>

            <div class="hidden sm:hidden md:hidden lg:flex xl:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="sm:block sm:ml-6">
                <div class="flex space-x-4 select-none">{renderSlot(slots, 'default')}</div>
              </div>
            </div>

            <div class="flex text-blue-600 flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium">
              {renderSlot(slots, 'info')}
            </div>
          </div>
        </div>
      </nav>
    )
  },
})
</script>

<style scoped>
.nav {
  padding-top: env(safe-area-inset-top);
}

html.dark .nav {
  @apply bg-black;
}
</style>
