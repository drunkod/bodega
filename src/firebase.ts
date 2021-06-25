import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAl8tVSjbl2fFavf3jjh3UGOS73nIS_SCw',
  authDomain: 'rubenr-bodega.firebaseapp.com',
  databaseURL:
    'https://rubenr-bodega-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'rubenr-bodega',
  storageBucket: 'rubenr-bodega.appspot.com',
  messagingSenderId: '121673126123',
  appId: '1:121673126123:web:2510c5adf814a84547eeae',
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.database()
const auth = firebase.auth()

export { db, auth }
