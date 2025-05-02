// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnFOcGprCyyLONAAS5XcU-85MNKf0U_sQ",
  authDomain: "edonovex.firebaseapp.com",
  projectId: "edonovex",
  storageBucket: "edonovex.firebasestorage.app",
  messagingSenderId: "69201925453",
  appId: "1:69201925453:web:5fa06c5149f5b6c39f5304",
  measurementId: "G-RGLKJVDFTB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
