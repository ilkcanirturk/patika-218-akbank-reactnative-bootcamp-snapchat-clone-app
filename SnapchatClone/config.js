import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig= {
  apiKey: "AIzaSyC9I_T9tm42KgnEZt-p98r8u1J5AoSV870",
  authDomain: "snapchatclone-7d20f.firebaseapp.com",
  projectId: "snapchatclone-7d20f",
  storageBucket: "snapchatclone-7d20f.appspot.com",
  messagingSenderId: "1013847616368",
  appId: "1:1013847616368:web:f2d1e3eec7d86e09343db5",
  measurementId: "G-FRDX2PPGDV"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);











// //Firebase config setup

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// //Firebase configuration

// const firebaseConfig= {
//   apiKey: "AIzaSyC9I_T9tm42KgnEZt-p98r8u1J5AoSV870",
//   authDomain: "snapchatclone-7d20f.firebaseapp.com",
//   projectId: "snapchatclone-7d20f",
//   storageBucket: "snapchatclone-7d20f.appspot.com",
//   messagingSenderId: "1013847616368",
//   appId: "1:1013847616368:web:f2d1e3eec7d86e09343db5",
//   measurementId: "G-FRDX2PPGDV"
// }

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// export {firebase};
