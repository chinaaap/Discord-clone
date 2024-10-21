import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGYsMIkCj2Q4MVQH2HqhqBG-AXN4ST_rY",
    authDomain: "discord-clone-udemy-b44d2.firebaseapp.com",
    projectId: "discord-clone-udemy-b44d2",
    storageBucket: "discord-clone-udemy-b44d2.appspot.com",
    messagingSenderId: "872539646868",
    appId: "1:872539646868:web:2c3e9f4ee54e679d3a3d81"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };