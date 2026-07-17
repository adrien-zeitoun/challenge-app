// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk7QC5Ofsh88eh59ECRM17ERLSWROz_50",
  authDomain: "challenge-aps.firebaseapp.com",
  projectId: "challenge-aps",
  storageBucket: "challenge-aps.firebasestorage.app",
  messagingSenderId: "364975781127",
  appId: "1:364975781127:web:ccaa8f7a2262265b4b41a2",
  measurementId: "G-TTKDSMJRG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);