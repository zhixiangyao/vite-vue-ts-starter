<template>
  <HelloWorld :msg="'Vue3 ref proxy reactive data！'" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'TestHelloWorld',
  components: {
    HelloWorld: defineAsyncComponent(() => import('/@/components/HelloWorld.vue')),
  },
  setup() {
    return { environment: import.meta.env?.VITE_APP_NODE_ENV ?? 'undefined' }
  },
})
</script>
