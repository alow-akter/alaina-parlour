// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5uuiDS3DZSgvzMHcr4Ya30s1wA1keng0",
    authDomain: "alaina-parlour-auth.firebaseapp.com",
    projectId: "alaina-parlour-auth",
    storageBucket: "alaina-parlour-auth.appspot.com",
    messagingSenderId: "460665007805",
    appId: "1:460665007805:web:88f8d15cd4f747dc7391d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app