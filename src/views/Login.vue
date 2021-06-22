<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-1/3">
      <h1 class="mb-6 text-center text-4xl font-semibold">
        Bodega <span class="font-thin">Project</span>
      </h1>
      <div class="flex items-center justify-center">
        <button
          @click="login"
          class="
            inline-block
            text-md
            px-8
            py-3
            leading-none
            border
            rounded
            text-white
            bg-gray-900
            border-gray-900
            hover:text-gray-900 hover:bg-white
            mt-4
            lg:mt-4
          "
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import firebase from 'firebase'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Login',
    methods: {
      login() {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase
          .auth()
          .signInWithPopup(provider)
          .catch((err) => {
            console.log(err)
          })
      },
    },
  })
</script>
