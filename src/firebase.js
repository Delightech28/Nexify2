// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcl2rPmu0Wtuou07MPB6iFjuex7sYL140",
  authDomain: "nexifyvendorapp-10e91.firebaseapp.com",
  projectId: "nexifyvendorapp-10e91",
  storageBucket: "nexifyvendorapp-10e91.firebasestorage.app",
  messagingSenderId: "719469295847",
  appId: "1:719469295847:web:ab162fd60c644ebd7e0a42",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };

