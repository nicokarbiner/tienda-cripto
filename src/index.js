import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-toastify/dist/ReactToastify.css";

import "./styles/styles.sass";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCngX9V0Pj4qtIPAZ_iMrldiyDqjSjMxxk",
  authDomain: "coder-react-38120-86eb1.firebaseapp.com",
  projectId: "coder-react-38120-86eb1",
  storageBucket: "coder-react-38120-86eb1.appspot.com",
  messagingSenderId: "895070719465",
  appId: "1:895070719465:web:cee1e879684d1d273f8f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();