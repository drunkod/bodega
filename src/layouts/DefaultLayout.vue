<template>
  <section class="min-h-screen bg-gray-50">
    <Sidebar />
    <Topbar />
    <!-- Sidebar Backdrop -->
    <div
      class="
        fixed
        inset-0
        z-10
        w-screen
        h-screen
        bg-black bg-opacity-25
        md:hidden
      "
    ></div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import Sidebar from '@/components/Sidebar.vue'
  import Topbar from '@/components/Topbar.vue'

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Sidebar,
      Topbar,
    },
  })
</script>
