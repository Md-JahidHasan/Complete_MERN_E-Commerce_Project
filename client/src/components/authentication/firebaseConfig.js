/**
 * title: firebase configuration for authenticating
 * firebase-app: react-test
 * gmail: mhnazmul48@gmail.com
 * author :Nazmul Huda
 *
 */
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
