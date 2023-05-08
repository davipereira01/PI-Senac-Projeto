// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg51o61YKEwkOprARAdG5EjVSROI3NlPM",
  authDomain: "dotted-transit-366913.firebaseapp.com",
  projectId: "dotted-transit-366913",
  storageBucket: "dotted-transit-366913.appspot.com",
  messagingSenderId: "1085972129154",
  appId: "1:1085972129154:web:59fe114232f697365d9b9b",
  measurementId: "G-262RZ641Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);