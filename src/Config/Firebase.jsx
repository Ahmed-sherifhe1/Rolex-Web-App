import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { lazy } from "react";
// const { getFirestore } = lazy(() => import("firebase/firestore"));
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDhCLIUihud3c9ZDgi08xVkQLpkz98E5OU",
  authDomain: "rolex-try-v01.firebaseapp.com",
  projectId: "rolex-try-v01",
  storageBucket: "rolex-try-v01.appspot.com",
  messagingSenderId: "550845316156",
  appId: "1:550845316156:web:1a9a08693ac041391b9739",
  measurementId: "G-Q14JEGFWFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
export let googleProvider = new GoogleAuthProvider();
export default getFirestore(app);
