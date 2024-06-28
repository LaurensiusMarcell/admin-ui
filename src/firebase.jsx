import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-38e74.firebaseapp.com",
  projectId: "store-tutorial-38e74",
  storageBucket: "store-tutorial-38e74.appspot.com",
  messagingSenderId: "98079567194",
  appId: "1:98079567194:web:5f132773ead00c9fc19763"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);