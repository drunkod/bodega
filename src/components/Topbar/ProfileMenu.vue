<template>
  <li class="relative">
    <button
      class="align-middle focus:shadow-outline-purple focus:outline-none"
      @click="toggleProfileMenu"
      @keydown.escape="closeProfileMenu"
      aria-label="Account"
      aria-haspopup="true"
    >
      <div class="relative w-8 h-8 rounded-full">
        <div
          class="
            group
            w-full
            h-full
            rounded-full
            overflow-hidden
            shadow-inner
            text-center
            bg-purple-800
            table
            cursor-pointer
          "
        >
          <span class="table-cell text-white font-light align-middle">{{
            userInitials
          }}</span>
        </div>
      </div>
    </button>
    <ul
      @keydown.escape="closeProfileMenu"
      v-if="isProfileMenuOpen"
      class="
        absolute
        right-0
        w-56
        p-2
        mt-2
        space-y-2
        text-gray-600
        bg-white
        border border-gray-100
        rounded-md
        shadow-md
        dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700
        transition
        duration-100
        ease-in
      "
      aria-label="submenu"
    >
      <li class="flex">
        <a
          class="
            inline-flex
            items-center
            w-full
            px-2
            py-1
            text-sm
            font-semibold
            transition-colors
            duration-150
            rounded-md
            hover:bg-gray-100 hover:text-gray-800
            dark:hover:bg-gray-800 dark:hover:text-gray-200
          "
          href="#"
        >
          <userIcon
            class="w-4 h-4 mr-3"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          <span>Profile</span>
        </a>
      </li>
      <li class="flex">
        <a
          class="
            inline-flex
            items-center
            w-full
            px-2
            py-1
            text-sm
            font-semibold
            transition-colors
            duration-150
            rounded-md
            hover:bg-gray-100 hover:text-gray-800
            dark:hover:bg-gray-800 dark:hover:text-gray-200
          "
          href="#"
        >
          <CogIcon
            class="w-4 h-4 mr-3"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          <span>Settings</span>
        </a>
      </li>
      <li class="flex">
        <a
          class="
            inline-flex
            items-center
            w-full
            px-2
            py-1
            text-sm
            font-semibold
            transition-colors
            duration-150
            rounded-md
            hover:bg-gray-100 hover:text-gray-800
            dark:hover:bg-gray-800 dark:hover:text-gray-200
            cursor-pointer
          "
          @click.prevent="logout"
        >
          <LogoutIcon class="w-4 h-4 mr-3" />
          <span>Log out</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
  import firebase from 'firebase'
  import { defineComponent } from 'vue'
  import { mapGetters } from 'vuex'
  import { LogoutIcon, CogIcon } from '@heroicons/vue/solid'
  import { UserIcon } from '@heroicons/vue/outline'

  export default defineComponent({
    name: 'ProfileMenu',
    components: {
      LogoutIcon,
      CogIcon,
      UserIcon,
    },
    data() {
      return {
        isProfileMenuOpen: false,
      }
    },
    computed: { ...mapGetters({ userInitials: 'userInitials' }) },
    methods: {
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => this.$router.push('/login'))
      },
      toggleProfileMenu() {
        this.isProfileMenuOpen = !this.isProfileMenuOpen
      },
      closeProfileMenu() {
        this.isProfileMenuOpen = false
      },
    },
  })
</script>