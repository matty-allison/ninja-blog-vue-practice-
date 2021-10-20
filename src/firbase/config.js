import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDg83RoTh3eaNA4YNf2dROeJqjaIjiIN4I",
  authDomain: "vue-firebase-site-ed9ec.firebaseapp.com",
  projectId: "vue-firebase-site-ed9ec",
  storageBucket: "vue-firebase-site-ed9ec.appspot.com",
  messagingSenderId: "185145633584",
  appId: "1:185145633584:web:86f1ce4cd194728e2236f5"
};

firebase.initializeApp(firebaseConfig)
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFireStore, timestamp }