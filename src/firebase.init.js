// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq3euQ3wyAV5pGkeW8ES2PR7V0lijixBA",
    authDomain: "online-book-fair.firebaseapp.com",
    projectId: "online-book-fair",
    storageBucket: "online-book-fair.appspot.com",
    messagingSenderId: "828975510478",
    appId: "1:828975510478:web:0f87ad8347bcd1aa10f19f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;