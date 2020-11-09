import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE4hq0SUiCdFjZ9dJahUjzi_bfKl_yaFQ",
  authDomain: "challenge-7c513.firebaseapp.com",
  databaseURL: "https://challenge-7c513.firebaseio.com",
  projectId: "challenge-7c513",
  storageBucket: "challenge-7c513.appspot.com",
  messagingSenderId: "1070769155553",
  appId: "1:1070769155553:web:4fbe78622d0fb1256f76a0",
  measurementId: "G-CYKJS35XRB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
