<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Live2dWidget } from '/@/logic'

onMounted(Live2dWidget)
</script>
