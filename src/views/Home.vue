<script lang="ts" setup>
const HelloWorld = defineAsyncComponent(() => import('~/components/HelloWorld.vue'))

const environment = import.meta.env?.VITE_APP_NODE_ENV ?? 'undefined'
</script>

<template>
  <HelloWorld :msg="`Vue3 ref proxy reactive data！${environment}`" />
</template>
