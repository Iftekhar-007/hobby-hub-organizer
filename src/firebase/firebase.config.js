// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDicRgANyfMLZzDrG3I5hXmxntGb3QbiA",
  authDomain: "hobbyhub-client-a0bd0.firebaseapp.com",
  projectId: "hobbyhub-client-a0bd0",
  storageBucket: "hobbyhub-client-a0bd0.firebasestorage.app",
  messagingSenderId: "448923472359",
  appId: "1:448923472359:web:e6ab337aba118386486d42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
