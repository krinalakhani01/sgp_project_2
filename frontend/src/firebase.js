import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, signInWithGoogle } from "../firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMGZCY8MY7tpBlyb45iXD1izr0JKKX6JY",
  authDomain: "expence-tarcker-9057e.firebaseapp.com",
  projectId: "expence-tarcker-9057e",
  storageBucket: "expence-tarcker-9057e.appspot.com",
  messagingSenderId: "26795920523",
  appId: "1:26795920523:web:1143b5d124a31483e1188e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User Info:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

export { auth, signInWithGoogle };
