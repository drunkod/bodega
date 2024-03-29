import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import messages from './i18n/ru'

/* auth.onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user)
}) */

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
})

createApp(App).use(store).use(router).use(i18n).mount('#app')
