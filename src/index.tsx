import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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

export const db = getFirestore(app)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
