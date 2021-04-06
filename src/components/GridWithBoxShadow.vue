<template>
  <div class="grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GridWithBoxShadow',
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.grid {
  // 行数
  --grid-row: 3;
  // 列数
  --grid-col: 3;
  --grid-item-width: 50px;
  --grid-item-height: 50px;
  --grid-item-border-width: 1px; // 实际的边框长度
  --grid-item-border-color: black; // 边框颜色
  --grid-item-border-width-half: calc(var(--grid-item-border-width) / 2);
  --grid-item-box-shadow: 0 0 0 var(--grid-item-border-width-half) var(--grid-item-border-color);

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  box-shadow: var(--grid-item-box-shadow);

  &-item {
    display: grid;
    place-items: center;
    width: var(--grid-item-width);
    height: var(--grid-item-height);
    box-shadow: inset var(--grid-item-box-shadow);

    &:hover {
      --grid-item-border-color: red;

      z-index: 1;
      box-shadow: inset 0 0 0 var(--grid-item-border-width-half) var(--grid-item-border-color),
        0 0 0 var(--grid-item-border-width-half) var(--grid-item-border-color);
      color: red;
    }
  }
}
</style>
