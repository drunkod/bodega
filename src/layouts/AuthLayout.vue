<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-900">
    <main
      class="
        flex flex-1 flex-col
        w-full
        max-w-6xl
        px-4
        py-8
        mx-auto
        md:px-8 md:py-16
        justify-center
        items-center
      "
    >
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'AuthLayout',
  })
</script>
