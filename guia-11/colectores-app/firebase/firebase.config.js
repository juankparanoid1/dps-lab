// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLpRh_JFBgZ-CQD06V3St8liBkTzCfWQ",
  authDomain: "colectoresapp.firebaseapp.com",
  projectId: "colectoresapp",
  storageBucket: "colectoresapp.appspot.com",
  messagingSenderId: "510956309554",
  appId: "1:510956309554:web:c99cf813b5e434dd08c02b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyCxLpRh_JFBgZ-CQD06V3St8liBkTzCfWQ",
//     authDomain: "colectoresapp.firebaseapp.com",
//     projectId: "colectoresapp",
//     storageBucket: "colectoresapp.appspot.com",
//     messagingSenderId: "510956309554",
//     appId: "1:510956309554:web:c99cf813b5e434dd08c02b"
// };

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// export default firebase;