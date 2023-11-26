// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-7OXwcpCVqqsccJuzCkXwRMrKR7qzuAg",
    authDomain: "appealcareer-app.firebaseapp.com",
    projectId: "appealcareer-app",
    storageBucket: "appealcareer-app.appspot.com",
    messagingSenderId: "107129106715",
    appId: "1:107129106715:web:933d74bc50b2ea6cb7e3be",
    measurementId: "G-8GWS6WTH0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);