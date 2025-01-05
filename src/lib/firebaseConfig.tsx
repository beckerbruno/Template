// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbcsCcB48KgVet-aMWwJbs8VJoO94nHHs",
  authDomain: "finance-d59c6.firebaseapp.com",
  projectId: "finance-d59c6",
  storageBucket: "finance-d59c6.firebasestorage.app",
  messagingSenderId: "49439862452",
  appId: "1:49439862452:web:cdacc459819c49e6de71e1",
  measurementId: "G-GYPJQ3DBXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};