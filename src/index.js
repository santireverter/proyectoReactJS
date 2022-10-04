import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqctP-64louhZTTokMGjlSKQy1V8yw0qc",
  authDomain: "e-commerce-coderhouse-18da9.firebaseapp.com",
  projectId: "e-commerce-coderhouse-18da9",
  storageBucket: "e-commerce-coderhouse-18da9.appspot.com",
  messagingSenderId: "327224383244",
  appId: "1:327224383244:web:4a5cc14a318b4e1fbfdb29"
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
