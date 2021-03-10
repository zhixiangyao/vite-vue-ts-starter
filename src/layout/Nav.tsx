export default defineComponent({
  name: 'Nav',
  setup(props, { slots }) {
    return () => (
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16 overflow-x-auto overflow-y-hidden">
            {renderSlot(slots, 'title')}

            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="sm:block sm:ml-6">
                <div class="flex space-x-4">{renderSlot(slots, 'default')}</div>
              </div>
            </div>

            {renderSlot(slots, 'info')}
          </div>
        </div>
      </nav>
    )
  },
})

import { defineComponent, renderSlot } from 'vue'
