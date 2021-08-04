<template>
  <router-view />

  <teleport to="#global-components">
    <APlayer />

    <Live2dWidget />

    <Github class="hidden xl:block" href="https://github.com/zhixiangyao/vite-vue-ts-starter" />
  </teleport>
</template>

<script setup lang="ts">
import APlayer from '/@/plugins/Aplayer/index.vue'
import Github from '/@/plugins/Github.vue'
import Live2dWidget from '/@/plugins/Live2dWidget.vue'
</script>
