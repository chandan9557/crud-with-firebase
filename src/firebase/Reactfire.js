// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIxot3WzWhEXbtSbfwQ_5SAj1RNgLdFoY",
  authDomain: "crudwithfirebase-49599.firebaseapp.com",
  projectId: "crudwithfirebase-49599",
  storageBucket: "crudwithfirebase-49599.appspot.com",
  messagingSenderId: "549587130293",
  appId: "1:549587130293:web:1c12359fbb465ed72eebfc",
  measurementId: "G-VN2L71499Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)