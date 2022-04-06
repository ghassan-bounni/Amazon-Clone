import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQvX3-7Xg2_wqvVIU6oPbZ3MW--RemBmg",
  authDomain: "clone-2e265.firebaseapp.com",
  projectId: "clone-2e265",
  storageBucket: "clone-2e265.appspot.com",
  messagingSenderId: "87456362532",
  appId: "1:87456362532:web:def96db41344aba939e8b1",
  measurementId: "G-9MDJY4GKQQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();
