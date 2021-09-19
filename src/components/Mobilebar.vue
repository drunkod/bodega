<template>
    <!-- TODO add custom shadow or ring ring-gray-50 -->
    <!-- fixed mobile nav -->
    <nav class="md:hidden fixed bottom-0 inset-x-0 bg-white ring ring-gray-200 dark:bg-gray-800">
        <div
        class="
            container
            flex
            items-center
            justify-between
            h-full
            px-6
            mx-auto
            dark:text-gray-400
        "
        >
            <nav class="flex space-x-4" aria-label="Tabs">
            <router-link
                custom
                to="/"
              v-slot="{ href, navigate, isActive }"   
            >
                  <a :href="href" @click="navigate"
                    :class="[isActive ? 'bg-pink-100 text-pink-900 dark:bg-gray-100 bg dark:text-gray-400' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']" :aria-current="isActive ? 'page' : undefined"
                  >
                <HomeIcon :class="[isActive ? 'w-6 h-6 mb-1 mx-auto' : 'w-5 h-5 mb-1 mx-auto']" />
                <span class="hidden sm:block">Home</span>
                </a>
            </router-link>
            </nav>
            
            <nav class="flex space-x-4" aria-label="Tabs">
            <router-link
                custom
                to="/cellar"
              v-slot="{ href, navigate, isActive }"   
            >
                  <a :href="href" @click="navigate"
                    :class="[isActive ? 'bg-pink-100 text-pink-900 dark:bg-gray-100 bg dark:text-gray-400' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']" :aria-current="isActive ? 'page' : undefined"
                  >
                <CubeIcon :class="[isActive ? 'w-6 h-6 mb-1 mx-auto' : 'w-5 h-5 mb-1 mx-auto']" />
                <span class="hidden sm:block">{{ $t('cellar.myCellar') }}</span>
                </a>
            </router-link>
            </nav>

            <nav class="flex space-x-4" aria-label="Tabs">
            <router-link
                custom
                to="/bottles"
              v-slot="{ href, navigate, isActive }"   
            >
                  <a :href="href" @click="navigate"
                    :class="[isActive ? 'bg-pink-100 text-pink-900 dark:bg-gray-100 bg dark:text-gray-400' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']" :aria-current="isActive ? 'page' : undefined"
                  >
                <SupportIcon :class="[isActive ? 'w-6 h-6 mb-1 mx-auto' : 'w-5 h-5 mb-1 mx-auto']" />
                <span class="hidden sm:block">{{ $t('bottles.bottles') }}</span>
                </a>
            </router-link>
            </nav>

            <nav class="flex space-x-4" aria-label="Tabs">
            <router-link
                custom
                to="/reviews"
              v-slot="{ href, navigate, isActive }"   
            >
                  <a :href="href" @click="navigate"
                    :class="[isActive ? 'bg-pink-100 text-pink-900 dark:bg-gray-100 bg dark:text-gray-400' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']" :aria-current="isActive ? 'page' : undefined"
                  >
                <StarIcon :class="[isActive ? 'w-6 h-6 mb-1 mx-auto' : 'w-5 h-5 mb-1 mx-auto']" />
                <span class="hidden sm:block">Reviews</span>
                </a>
            </router-link>
            </nav>

            <nav class="flex space-x-4" aria-label="Tabs">
            <router-link
                custom
                to="/notes"
              v-slot="{ href, navigate, isActive }"   
            >
                  <a :href="href" @click="navigate"
                    :class="[isActive ? 'bg-pink-100 text-pink-900 dark:bg-gray-100 bg dark:text-gray-400' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']" :aria-current="isActive ? 'page' : undefined"
                  >
                <NewspaperIcon :class="[isActive ? 'w-6 h-6 mb-1 mx-auto' : 'w-5 h-5 mb-1 mx-auto']" />
                <span class="hidden sm:block">Notes</span>
                </a>
            </router-link>
            </nav>

            <nav class="flex space-x-4" aria-label="Tabs">
            <router-link
                custom
                to="/map"
              v-slot="{ href, navigate, isActive }"   
            >
                  <a :href="href" @click="navigate"
                    :class="[isActive ? 'bg-pink-100 text-pink-900 dark:bg-gray-100 bg dark:text-gray-400' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']" :aria-current="isActive ? 'page' : undefined"
                  >
                <MapIcon :class="[isActive ? 'w-6 h-6 mb-1 mx-auto' : 'w-5 h-5 mb-1 mx-auto']" />
                <span class="hidden sm:block">Map</span>
                </a>
            </router-link>
            </nav>                  
        </div>
          <!-- <div>
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">Select a tab</label>
              <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <nav class="flex space-x-4" aria-label="Tabs">
                <router-link v-for="tab in tabs" :key="tab.name" :to="tab.to" :class="[tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 font-medium text-sm rounded-md']" :aria-current="tab.current ? 'page' : undefined">
                  {{ tab.name }}
                </router-link>
              </nav>
            </div>
          </div> -->
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
        tabs: [
            { name: '', href: '#', current: false, },
            { name: 'Company', href: '#', current: false },
            { name: 'Team Members', href: '#', current: true },
            { name: 'Billing', href: '#', current: false },
        ]
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
