// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB-PPmK6FkDr6rHPBQq7hE9iE7ouvmZtI",
  authDomain: "modern-jute-wooden.firebaseapp.com",
  projectId: "modern-jute-wooden",
  storageBucket: "modern-jute-wooden.appspot.com",
  messagingSenderId: "194619678236",
  appId: "1:194619678236:web:6f7bd8f51c1e3e0e3c49d9",
  measurementId: "G-JSELGMQJ5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;