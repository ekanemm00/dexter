// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage} from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "dexter-54505.firebaseapp.com",
  projectId: "dexter-54505",
  storageBucket: "dexter-54505.firebasestorage.app",
  messagingSenderId: "510576074152",
  appId: "1:510576074152:web:e2785ac49a8f3a1968919d"
};

// Initialize Firebase
const app = getApps ().length == 0 ? initializeApp(firebaseConfig): getApp();
const db =getFirestore(app);
const storage =getStorage(app);

export {db, storage};