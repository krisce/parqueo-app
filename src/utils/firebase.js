import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, signOut, onAuthStateChanged, getCurrentUser } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
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



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const useAuth = () => {
  return {
    signIn: (email, password) => signInWithEmailAndPassword(auth, email, password),
    signOut: () => signOut(auth),
    updatePassword: (oldPassword, newPassword) => {
      const user = getCurrentUser(auth);
      return updatePassword(user, newPassword);
    },
    getCurrentUser: () => getCurrentUser(auth),
  };
};

export const useFirestore = () => {
  return { db };
};

export default app;
