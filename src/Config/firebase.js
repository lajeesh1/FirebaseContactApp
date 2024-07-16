// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPDMjoQNDQ0eXIDkNocZEhFVMgnijh93s",
  authDomain: "vite-contact-39b46.firebaseapp.com",
  projectId: "vite-contact-39b46",
  storageBucket: "vite-contact-39b46.appspot.com",
  messagingSenderId: "855633114535",
  appId: "1:855633114535:web:b321c7dc55be5acf43f282",,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
