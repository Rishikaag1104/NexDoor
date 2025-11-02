import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk_Ag_ZCJnA0ks13xjCPEIuw569MlkNr8",
  authDomain: "neighbourhood-help-a6f42.firebaseapp.com",
  projectId: "neighbourhood-help-a6f42",
  storageBucket: "neighbourhood-help-a6f42.appspot.com", // ✅ fixed
  messagingSenderId: "447315578451",
  appId: "1:447315578451:web:4be840f23b0a49762300a6",
  measurementId: "G-V5E4X9JNK7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export { signInWithPopup, signOut };