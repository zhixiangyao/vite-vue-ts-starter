<template>
  <main class="main flex flex-col justify-center items-center min-h-screen pt-16">
    <slot name="default" />
  </main>
</template>

<style scoped>
html.dark .main {
  @apply bg-black;
}
</style>
