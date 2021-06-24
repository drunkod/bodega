<template>
  <nav
    class="
      fixed
      top-0
      left-0
      z-20
      h-full
      pb-10
      overflow-x-hidden overflow-y-auto
      transition
      origin-left
      transform
      bg-gray-900
      w-60
      md:translate-x-0
    "
    :class="{ '-translate-x-full': !sideBar, 'translate-x-0': sideBar }"
  >
    <router-link to="/" class="flex items-center px-4 py-5 text-white w-8/12">
      <Logo />
    </router-link>
    <nav class="text-sm font-medium text-gray-500" aria-label="Main Navigation">
      <router-link
        class="
          flex
          items-center
          px-4
          py-3
          transition
          cursor-pointer
          group
          hover:bg-gray-800 hover:text-gray-200
        "
        to="/"
      >
        <HomeIcon
          class="
            flex-shrink-0
            w-5
            h-5
            mr-2
            text-gray-400
            transition
            group-hover:text-gray-300
          "
        />
        <span>Home</span>
      </router-link>
      <router-link
        class="
          flex
          items-center
          px-4
          py-3
          transition
          cursor-pointer
          group
          hover:bg-gray-800 hover:text-gray-200
        "
        to="/villacobete"
      >
        <BriefcaseIcon
          class="
            flex-shrink-0
            w-5
            h-5
            mr-2
            text-gray-400
            transition
            group-hover:text-gray-300
          "
        />

        <span>VillaCobete</span>
      </router-link>
      <router-link
        class="
          flex
          items-center
          px-4
          py-3
          transition
          cursor-pointer
          group
          hover:bg-gray-800 hover:text-gray-200
        "
        to="settings"
      >
        <CogIcon
          class="
            flex-shrink-0
            w-5
            h-5
            mr-2
            text-gray-400
            transition
            group-hover:text-gray-300
          "
        />
        <span>Settings</span>
      </router-link>
    </nav>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import Logo from '@/components/Logo.vue'
  import { HomeIcon, CogIcon, BriefcaseIcon } from '@heroicons/vue/solid'

  export default defineComponent({
    name: 'Sidebar',
    components: {
      Logo,
      HomeIcon,
      CogIcon,
      BriefcaseIcon,
    },
    data() {
      return {
        sideBar: null,
      }
    },
  })
</script>
