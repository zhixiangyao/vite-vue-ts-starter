<script lang="tsx">
import { defineComponent, renderSlot } from 'vue'

export default defineComponent({
  name: 'Main',
  setup(p, { slots }) {
    return () => <main class="main">{renderSlot(slots, 'default')}</main>
  },
})
</script>

<style lang="postcss" scoped>
.main {
  @apply flex flex-col justify-center items-center dark:bg-black;
  @apply min-h-screen pt-16;
}
</style>
