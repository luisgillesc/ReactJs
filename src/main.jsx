import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4NYqt7WJqyVpOS1Jve7MAOOw6T_4hNZM",
  authDomain: "reactappcoderhouse-7dc80.firebaseapp.com",
  projectId: "reactappcoderhouse-7dc80",
  storageBucket: "reactappcoderhouse-7dc80.appspot.com",
  messagingSenderId: "343711843092",
  appId: "1:343711843092:web:b4c07c32567c3113093801"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
