import firebase from 'firebase/app';
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA_0dGCq-zLIrTOZaHE-iACTt2rrseA43Q",
  authDomain: "todo-win-320d5.firebaseapp.com",
  projectId: "todo-win-320d5",
  storageBucket: "todo-win-320d5.appspot.com",
  messagingSenderId: "637900067916",
  appId: "1:637900067916:web:1af4607b11abd1a6fa90e9"
};


let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };
