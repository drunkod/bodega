<template>
  <div class="ml-0 transition md:ml-60">
    <header class="flex items-center justify-between w-full px-4 h-14">
      <button
        class="block btn btn-light-secondary md:hidden"
        @click.stop="sideBar = true"
      >
        <span class="sr-only">Menu</span>
        <svg
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="hidden -ml-3 form-icon md:block w-96"></div>
      <div class="flex items-center">
        <a href="#" class="flex text-gray-500">
          <svg
            class="flex-shrink-0 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
            />
          </svg>
        </a>
        <button
          @click="logout"
          class="
            inline-block
            text-sm
            px-4
            py-2
            leading-none
            border
            rounded
            text-blue-800
            border-blue-800
            hover:text-white hover:bg-blue-800
            mt-4
            ml-4
            lg:mt-0
          "
        >
          Logout
        </button>
        <a href="#" class="">
          <span
            class="
              ml-4
              avatar avatar-sm
              rounded-full
              bg-blue-800
              text-white
              w-8
              h-8
              font-light
              justify-center
              items-centre
              flex
            "
            >RR</span
          >
        </a>
      </div>
    </header>
    <div class="p-4">
      <!-- Add content here, remove div below -->
      <div class="-mt-2 border-4 border-dashed rounded h-96"></div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import firebase from 'firebase'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Topbar',
    methods: {
      logout() {
        console.log('LOGOUT')
        firebase
          .auth()
          .signOut()
          .then(() => this.$router.push('/login'))
      },
    },
  })
</script>
