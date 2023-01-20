import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhF_Vnd5HYC5mwhwPiEmtkfQ3Q0ziZbYM",
    authDomain: "poly-reading-app.firebaseapp.com",
    projectId: "poly-reading-app",
    storageBucket: "poly-reading-app.appspot.com",
    messagingSenderId: "113386789665",
    appId: "1:113386789665:web:207b2259ff3879986fbc60"
};


// Initialize Firebase
initializeApp(firebaseConfig);

// Init firestore
const db = getFirestore()
const auth = getAuth()
export { db, auth }