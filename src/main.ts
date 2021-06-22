import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import firebase from 'firebase'
import store from './store'

const firebaseConfig = {
  apiKey: 'AIzaSyAl8tVSjbl2fFavf3jjh3UGOS73nIS_SCw',
  authDomain: 'rubenr-bodega.firebaseapp.com',
  projectId: 'rubenr-bodega',
  storageBucket: 'rubenr-bodega.appspot.com',
  messagingSenderId: '121673126123',
  appId: '1:121673126123:web:2510c5adf814a84547eeae',
}
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user)
})

createApp(App).use(store).use(router).mount('#app')
