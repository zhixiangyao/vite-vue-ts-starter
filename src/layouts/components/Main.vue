<template>
  <main class="layout flex flex-col justify-center items-center min-h-screen pt-16">
    <slot name="default" />
  </main>
</template>

<style scoped>
html.dark .layout {
  @apply bg-black;
}
</style>
