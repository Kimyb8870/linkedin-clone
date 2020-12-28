import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS5v0vCQw-4FgHuFOdwa1O70HdomhU0ds",
  authDomain: "linkedin-clone-b2216.firebaseapp.com",
  projectId: "linkedin-clone-b2216",
  storageBucket: "linkedin-clone-b2216.appspot.com",
  messagingSenderId: "238428018171",
  appId: "1:238428018171:web:84c31bfa39ab3bb6b2a75e",
  measurementId: "G-XVTGJSHE66",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
