import firebase from "firebase";
// Initialize Firebase

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain ,
  projectId:process.env.REACT_APP_projectId ,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId ,
  appId: process.env.REACT_APP_appId,
  measurementId:process.env.REACT_APP_measurementId,
}

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, config };