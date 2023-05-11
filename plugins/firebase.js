import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDMD44CcBovfcw6yx4NpRKrbrNKHdnIVCM",
  authDomain: "admin-console-36e09.firebaseapp.com",
  projectId: "admin-console-36e09",
  storageBucket: "admin-console-36e09.appspot.com",
  messagingSenderId: "291074183048",
  appId: "1:291074183048:web:8a701f962419ef3a39343d",
  measurementId: "G-60NW8M9XTG",
}

const firebaseClient = firebase.initializeApp(config)
export default firebaseClient
