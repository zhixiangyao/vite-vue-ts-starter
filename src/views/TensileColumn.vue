<template>
  <div class="column flex justify-between w-full h-full overflow-hidden">
    <div class="column-left relative min-w-40 h-[calc(100vh-64px)] bg-red-300">
      <div class="resize-bar overflow-scroll opacity-0 resize-x" />
      <div
        class="
          resize-line
          absolute
          top-0
          right-0
          bottom-0
          pointer-events-none
          before:absolute
          before:top-1/2
          before:left-1/2
          before:content-·
          before:flex
          before:flex-col-reverse
          before:h-8px
          before:text-transparent
        "
      />
      <div class="absolute top-0 right-5px left-0 bottom-0 p-16px overflow-x-hidden">
        {{ '左侧的内容，左侧的内容，左侧的内容，左侧的内容' }}
      </div>
    </div>

    <div
      class="
        flex
        items-center
        justify-center
        flex-1
        h-[calc(100vh-64px)]
        min-w-40
        p-4
        bg-blue-300
        overflow-hidden
      "
    >
      <GridWithBoxShadow />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const GridWithBoxShadow = defineAsyncComponent(() => import('/@/components/GridWithBoxShadow.vue'))
</script>

<style lang="scss" scoped>
.column {
  .column-left {
    .resize-line {
      border-right: 4px solid gray;
      border-left: 4px solid gray;
      transition: border 0.3s ease-in-out;

      &::before {
        transform: translate(-50%, -50%) scale(2.5);
        transition: color 0.3s ease-in-out;
      }
    }

    .resize-bar {
      height: inherit;
      cursor: ew-resize;
      cursor: col-resize;

      &:hover ~ .resize-line {
        border-right: 4px solid black;
        border-left: 4px solid black;
        transition: border 0.3s ease-in-out;

        &::before {
          color: white;
          transition: color 0.3s ease-in-out;
        }
      }

      &:active ~ .resize-line {
        border-right: 4px solid black;
        border-left: 4px solid black;
        transition: border 0.3s ease-in-out;

        &::before {
          color: white;
          transition: color 0.3s ease-in-out;
        }
      }

      &::-webkit-scrollbar {
        width: 200px;
        height: inherit;
      }
    }
  }
}
</style>
