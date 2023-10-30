// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI7a9MceVcCz24wJTcyOtEtNdr0x4I1f8",
  authDomain: "travellogin-ce516.firebaseapp.com",
  projectId: "travellogin-ce516",
  storageBucket: "travellogin-ce516.appspot.com",
  messagingSenderId: "1074019852700",
  appId: "1:1074019852700:web:a479f360bc46780a506859",
  measurementId: "G-3XCDG3E2TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);