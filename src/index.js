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
  apiKey: "AIzaSyBXtnpBgepKApHiUVEToQnq3CJBNcU2kNE",
  authDomain: "netflixdev-82df9.firebaseapp.com",
  projectId: "netflixdev-82df9",
  storageBucket: "netflixdev-82df9.appspot.com",
  messagingSenderId: "302146268105",
  appId: "1:302146268105:web:eb3b3165d2fe32001a1618",
  measurementId: "G-L5SEPW0XGM"
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
