<template>
  <div class="flex items-center justify-center">
    <label for="toggle" class="flex items-center cursor-pointer">
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input
          type="checkbox"
          :checked="isDark"
          @change="() => toggleDark()"
          id="toggle"
          class="sr-only"
        />
        <!-- line -->
        <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <!-- dot -->
        <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

export default defineComponent({
  name: 'ToggleButton',
  setup() {
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    return { isDark, toggleDark }
  },
})
</script>

<style scoped>
input:checked ~ .dot {
  background-color: #48bb78;
  transform: translateX(100%);
}
</style>
