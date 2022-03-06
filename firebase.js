// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ7vs08i7GrMx-qzgibZUWnsQRXEl38y8",
  authDomain: "cookee-8c74e.firebaseapp.com",
  projectId: "cookee-8c74e",
  storageBucket: "cookee-8c74e.appspot.com",
  messagingSenderId: "896670395159",
  appId: "1:896670395159:web:9e91c7cabb10868fb6a552"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
