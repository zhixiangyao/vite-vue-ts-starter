<template>
  <div class="HelloWorld">
    <div>{{ msg }}</div>

    <button class="btn-indigo" @click="count++">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const count = ref(0)

    return { count }
  },
})
</script>

<style lang="postcss" scoped>
.HelloWorld {
  @apply flex flex-col items-center;

  .btn-indigo {
    @apply my-4 py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
  }
}
</style>
