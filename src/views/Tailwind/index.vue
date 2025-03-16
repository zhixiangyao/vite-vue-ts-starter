<script lang="tsx">
import TailwindDemo from './components/TailwindDemo.vue'

function Tailwind() {
  return () => (
    <>
      <div class="w-full bg-violet-400">test</div>

      <TailwindDemo />
      <TailwindDemo />
    </>
  )
}

export default defineComponent(Tailwind)
</script>
