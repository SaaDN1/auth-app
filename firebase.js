import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXROMAzbSH2TXbv0lSJn8ilBAc-7_cyH8",
    authDomain: "auth-c3aa3.firebaseapp.com",
    projectId: "auth-c3aa3",
    storageBucket: "auth-c3aa3.firebasestorage.app",
    messagingSenderId: "425989008756",
    appId: "1:425989008756:web:c55c8c15eaa42214299021"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);