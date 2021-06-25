<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-1/3">
      <h1 class="mb-6 block w-6/12 text-3xl m-auto">
        <Logo />
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
            bg-blue-800
            border-blue-800
            hover:text-blue-800 hover:bg-white
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
  import Logo from '@/components/Logo.vue'

  export default defineComponent({
    name: 'Login',
    components: {
      Logo,
    },
    methods: {
      login() {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(() => this.$router.push('/'))
          .catch((err) => {
            console.log(err)
          })
      },
    },
  })
</script>
