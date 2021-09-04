<template>
  <div class="flex flex-col items-center">
    <div>{{ msg }}</div>

    <button
      class="
        my-4
        py-2
        px-4
        bg-indigo-500
        text-white
        font-semibold
        rounded-lg
        shadow-md
        hover:bg-indigo-700
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75
      "
      @click="count++"
    >
      count is: {{ count }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults } from 'vue'

const count = ref(0)

withDefaults(defineProps<{ msg: string }>(), { msg: 'withDefaults-value' })
</script>
