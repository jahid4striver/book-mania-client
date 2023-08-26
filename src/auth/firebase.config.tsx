// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxni81CpOyShoZQU1i5QQNWKCPB9yBBbs",
    authDomain: "book-mania-427cf.firebaseapp.com",
    projectId: "book-mania-427cf",
    storageBucket: "book-mania-427cf.appspot.com",
    messagingSenderId: "57966328004",
    appId: "1:57966328004:web:ad8c7bbad5ed71b00a7191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;