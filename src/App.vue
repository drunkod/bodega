<template>
  <component :is="layout" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import AuthLayout from '@/layouts/AuthLayout.vue'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'

  export default defineComponent({
    name: 'App',
    components: {
      AuthLayout,
      DefaultLayout,
    },
    data() {
      return {
        layout: null,
      }
    },
    watch: {
      $route(to) {
        if (to.meta.layout !== undefined) {
          this.layout = to.meta.layout
        } else {
          this.layout = 'DefaultLayout'
        }
      },
    },
  })
</script>
