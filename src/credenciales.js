// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe85dVHCFgObAgGGiXJbJeaj9ugwnyESA",
  authDomain: "mi-parqueo-app123.firebaseapp.com",
  projectId: "mi-parqueo-app123",
  storageBucket: "mi-parqueo-app123.appspot.com",
  messagingSenderId: "1093586826098",
  appId: "1:1093586826098:web:b9e48f340136b2a23ba3eb"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;

