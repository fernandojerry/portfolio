// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAh2tbRn-EO4CfJECS_HPC41dONXGY02YQ",
  authDomain: "myportfolio-6689d.firebaseapp.com",
  projectId: "myportfolio-6689d",
  storageBucket: "myportfolio-6689d.appspot.com",
  messagingSenderId: "267809210175",
  appId: "1:267809210175:web:4be9fca703759af1341d8a",
  measurementId: "G-JTRR82D9HY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)

export default app