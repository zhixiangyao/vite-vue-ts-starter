<template>
  <div class="column">
    <div class="column-left">
      <div class="resize-bar"></div>
      <div class="resize-line"></div>
      <div class="resize-save"> 左侧的内容，左侧的内容，左侧的内容，左侧的内容 </div>
    </div>

    <div class="column-right"> <GridWithBoxShadow /> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GridWithBoxShadow from '/@/components/GridWithBoxShadow.vue'

export default defineComponent({
  name: 'TestTensileColumnPage',
  components: {
    GridWithBoxShadow,
  },
})
</script>

<style lang="postcss" scoped>
.column {
  @apply flex justify-between w-full h-full overflow-hidden;

  .column-left {
    height: calc(100vh - 64px);

    @apply relative min-w-40 bg-red-300;

    .resize-save {
      position: absolute;
      top: 0;
      right: 5px;
      bottom: 0;
      left: 0;
      padding: 16px;
      overflow-x: hidden;
    }

    /* 拖拽线 */
    .resize-line {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 4px solid gray;
      border-left: 4px solid gray;
      pointer-events: none;
      transition: border 0.3s ease-in-out;

      &::before {
        content: '·';
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column-reverse;
        height: 8px;
        color: transparent;
        transform: translate(-50%, -50%) scale(2.5);
        transition: color 0.3s ease-in-out;
      }
    }

    .resize-bar {
      height: inherit;
      overflow: scroll;
      cursor: ew-resize;
      cursor: col-resize;
      opacity: 0;
      resize: horizontal;

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

  .column-right {
    height: calc(100vh - 64px);

    @apply flex items-center justify-center flex-1 p-4 min-w-40 bg-blue-300 overflow-hidden;
  }
}
</style>
