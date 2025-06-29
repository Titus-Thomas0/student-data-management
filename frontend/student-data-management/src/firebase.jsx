// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1_BrvhZKShKxN7cNTMkb0TD1Rreln4VQ",
  authDomain: "student-data-management-df1db.firebaseapp.com",
  projectId: "student-data-management-df1db",
  storageBucket: "student-data-management-df1db.firebasestorage.app",
  messagingSenderId: "784554497022",
  appId: "1:784554497022:web:a0197de15c56e464f2a6af",
  measurementId: "G-Y24QLTHSYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };