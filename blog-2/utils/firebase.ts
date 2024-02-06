// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'premium-country-378005.firebaseapp.com',
  projectId: 'premium-country-378005',
  storageBucket: 'premium-country-378005.appspot.com',
  messagingSenderId: '1006451073577',
  appId: '1:1006451073577:web:c9a1534a7837dc86713238',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
