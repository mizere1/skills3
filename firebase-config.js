// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYvFFHRwsS6LQvfpU-TBQiez1L_E7HcKQ",
  authDomain: "cheza-e769a.firebaseapp.com",
  databaseURL: "https://cheza-e769a-default-rtdb.firebaseio.com",
  projectId: "cheza-e769a",
  storageBucket: "cheza-e769a.appspot.com",
  messagingSenderId: "462385709527",
  appId: "1:462385709527:web:f5341ac32d4b3ec72ccb92",
  measurementId: "G-HV76EHW0LR" // Analytics measurementId, not used by current app features
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Analytics not currently used in the app features

// Initialize Firebase services and export them
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
