<template>
    <!-- TODO add custom shadow or ring ring-gray-50 -->
    <!-- fixed mobile nav -->
    <nav class="md:hidden fixed bottom-0 inset-x-0 bg-white ring ring-gray-50 dark:bg-gray-800">
        <div
        class="
            container
            flex
            items-center
            justify-between
            h-full
            px-6
            mx-auto
            text-pink-900
            dark:text-gray-400
        "
        >
            <router-link
                class="
                w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300
                "
                to="/"
            >
                <HomeIcon class="w-6 h-6 mb-2 mx-auto" />
                <span class="hidden sm:block">Home</span>
            </router-link>

            <router-link
                class="
                w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300
                "
                to="/cellar"
            >
                <CubeIcon class="w-6 h-6 mb-2 mx-auto" />
                <span class="hidden sm:block">{{ $t('cellar.myCellar') }}</span>
            </router-link>

            <router-link
                class="
                w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300
                "
                to="/bottles"
            >
                <SupportIcon class="w-6 h-6 mb-2 mx-auto" />
                <span class="hidden sm:block">{{ $t('bottles.bottles') }}</span>
            </router-link>

            <router-link
                class="
                w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300
                "
                to="/reviews"
            >
                <StarIcon class="w-6 h-6 mb-2 mx-auto" />
                <span class="hidden sm:block">Reviews</span>
            </router-link>

            <router-link
                class="
                w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300
                "
                to="/notes"
            >
                <NewspaperIcon class="w-6 h-6 mb-2 mx-auto" />
                <span class="hidden sm:block">Notes</span>
            </router-link>

            <router-link
                class="
                w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300
                "
                to="/map"
            >
                <MapIcon class="w-6 h-6 mb-2 mx-auto" />
                <span class="hidden sm:block">Map</span>
            </router-link>      
        </div>
    </nav>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import Logo from '@/components/Logo.vue'
  import {
    HomeIcon,
    SupportIcon,
    StarIcon,
    ChartBarIcon,
    CubeIcon,
    MapIcon,
    NewspaperIcon,
  } from '@heroicons/vue/solid'
  import { mapGetters, mapMutations } from 'vuex'

  export default defineComponent({
    name: 'Mobilebar',
    components: {
      Logo,
      HomeIcon,
      CubeIcon,
      ChartBarIcon,
      SupportIcon,
      StarIcon,
      MapIcon,
      NewspaperIcon,      
    },
    data() {
      return {
        sideBar: null,
      }
    },
    computed: {
      ...mapGetters({ showSidebar: 'general/sidebar' }),
    },
    methods: {
      ...mapMutations({
        toggleSidebar: 'general/TOGGLE_SIDEBAR',
      }),
    },
  })
</script>
