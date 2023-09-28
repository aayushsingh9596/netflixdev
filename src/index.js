import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";
//import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFT5KG3Hsnpi1BZfpabKYQ1ffWgTluCBs",
  authDomain: "netflixgpt-a4cff.firebaseapp.com",
  projectId: "netflixgpt-a4cff",
  storageBucket: "netflixgpt-a4cff.appspot.com",
  messagingSenderId: "338963150013",
  appId: "1:338963150013:web:4a2ed99b70bedd0d7933d4",
  measurementId: "G-FW15CHTKMH"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const app = 
//const analytics = getAnalytics(app);

root.render(
   <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </React.StrictMode>
);
