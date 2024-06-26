import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBe85dVHCFgObAgGGiXJbJeaj9ugwnyESA",
  authDomain: "mi-parqueo-app123.firebaseapp.com",
  projectId: "mi-parqueo-app123",
  storageBucket: "mi-parqueo-app123.appspot.com",
  messagingSenderId: "1093586826098",
  appId: "1:1093586826098:web:b9e48f340136b2a23ba3eb"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;

