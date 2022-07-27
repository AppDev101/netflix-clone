import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { getFirestore } from "@firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDdOCLr9Z4dayJIM-CURLvxJDvqY-cW_l8",
  authDomain: "netflix-clone-a48ea.firebaseapp.com",
  projectId: "netflix-clone-a48ea",
  storageBucket: "netflix-clone-a48ea.appspot.com",
  messagingSenderId: "934911482273",
  appId: "1:934911482273:web:858d7e43c33deb400513e0",
  measurementId: "G-B69Z4133W2",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth();
const [createUser, signInUser] = [
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
];

export { createUser, signInUser };
export { auth };
export default db;
