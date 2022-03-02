// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_1,
    authDomain: process.env.REACT_APP_FIREBASE_2,
    projectId: process.env.REACT_APP_FIREBASE_3,
    storageBucket: process.env.REACT_APP_FIREBASE_4,
    messagingSenderId: process.env.REACT_APP_FIREBASE_5,
    appId: process.env.REACT_APP_FIREBASE_6,
    measurementId: process.env.REACT_APP_FIREBASE_7
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);