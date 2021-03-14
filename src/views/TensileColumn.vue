<template>
  <div class="column">
    <div class="column-left">
      <div class="resize-bar"></div>
      <div class="resize-line"></div>
      <div class="resize-save"> 左侧的内容，左侧的内容，左侧的内容，左侧的内容 </div>
    </div>
    <div class="column-right"> 右侧的内容，右侧的内容，右侧的内容，右侧的内容 </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TensileColumn',
})
</script>

<style lang="postcss" scoped>
.column {
  @apply flex justify-between w-full h-full overflow-hidden;
}

.column-left {
  height: calc(100vh - 64px);

  @apply relative min-w-40 bg-red-300;
}

.column-right {
  height: calc(100vh - 64px);

  @apply box-border flex-1 p-4 min-w-40 bg-blue-300 overflow-hidden;
}

.resize-save {
  position: absolute;
  top: 0;
  right: 5px;
  bottom: 0;
  left: 0;
  padding: 16px;
  overflow-x: hidden;
}

.resize-bar {
  width: 200px;
  height: inherit;
  overflow: scroll;
  cursor: ew-resize;
  cursor: col-resize;
  opacity: 0;
  resize: horizontal;
}

/* 拖拽线 */
.resize-line {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  border-right: 1px solid #bbb;
  border-left: 1px solid #bbb;
}

.resize-bar:hover ~ .resize-line,
.resize-bar:active ~ .resize-line {
  border-left: 1px dashed black;
}

.resize-bar::-webkit-scrollbar {
  width: 200px;
  height: inherit;
}
</style>
