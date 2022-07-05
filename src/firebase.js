// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBbjGcYpeshHVc6DI9R8d9xu6iuO-8mWmA",
    authDomain: "challenge-6ada6.firebaseapp.com",
    projectId: "challenge-6ada6",
    storageBucket: "challenge-6ada6.appspot.com",
    messagingSenderId: "135623015009",
    appId: "1:135623015009:web:683afd55ea5965a5e50820",
    measurementId: "${config.measurementId}"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const  auth = firebase.auth();
  export {db, auth };