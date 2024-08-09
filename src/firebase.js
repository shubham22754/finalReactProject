import firebase from 'firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYXSYobJkFioKuXds7QQNNP_1M_YvE8NQ",
  authDomain: "haryanawastemanagement-63d56.firebaseapp.com",
  databaseURL: "https://haryanawastemanagement-63d56-default-rtdb.firebaseio.com/",
  projectId: "haryanawastemanagement-63d56",
  storageBucket: "haryanawastemanagement-63d56.appspot.com",
  messagingSenderId: "927296277506",
  appId: "1:927296277506:web:a49c6fed3277304c66ab1b",
  measurementId: "G-9XMDMFFR5Q"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
export default firebase;