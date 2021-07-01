<template>
  <div :class="{ dark: this.dark }">
    <component :is="layout" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { mapGetters } from 'vuex'

  import AuthLayout from './layouts/AuthLayout.vue'
  import DefaultLayout from './layouts/DefaultLayout.vue'

  export default defineComponent({
    name: 'App',
    components: {
      AuthLayout,
      DefaultLayout,
    },
    data() {
      return {
        layout: '',
      }
    },
    computed: { ...mapGetters({ dark: 'isDarkMode' }) },
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
