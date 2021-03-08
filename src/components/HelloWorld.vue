<template>
  <div>{{ msg }}</div>

  <button @click="count++">count is: {{ count }}</button>
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
