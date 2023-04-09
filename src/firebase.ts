import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBsD8Rs2KAX6631MEXwABJpi0e_FXVQiS8",
  authDomain: "nonametestapp-fb101.firebaseapp.com",
  projectId: "nonametestapp-fb101",
  storageBucket: "nonametestapp-fb101.appspot.com",
  messagingSenderId: "111582250802",
  appId: "1:111582250802:web:39268d8326468f67f3b92b",
  measurementId: "G-CQ310FSDBD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage();