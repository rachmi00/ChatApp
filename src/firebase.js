// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3c6yCfGKqSOZ8CsWT3Bq8XX1SZxza8N0",
  authDomain: "chatapp-3a5fc.firebaseapp.com",
  projectId: "chatapp-3a5fc",
  storageBucket: "chatapp-3a5fc.appspot.com",
  messagingSenderId: "977897683594",
  appId: "1:977897683594:web:9db64aaebbc83815c24b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);