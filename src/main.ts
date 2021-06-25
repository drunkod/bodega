import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import { auth } from './firebase'

auth.onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user)
})

createApp(App).use(store).use(router).mount('#app')
