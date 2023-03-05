import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-7e59e.firebaseapp.com",
  projectId: "dashboard-7e59e",
  storageBucket: "dashboard-7e59e.appspot.com",
  messagingSenderId: "931059976700",
  appId: "1:931059976700:web:dc66c081808e5f05710a79"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

