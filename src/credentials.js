// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByXOejao8hyr9m8LxQHoJGKC9b21MvFp0",
  authDomain: "estudio-app-d931a.firebaseapp.com",
  projectId: "estudio-app-d931a",
  storageBucket: "estudio-app-d931a.appspot.com",
  messagingSenderId: "413238634242",
  appId: "1:413238634242:web:7fc3ccbefba2dee0bcc41b",
  measurementId: "G-T7JEC9NHF0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);