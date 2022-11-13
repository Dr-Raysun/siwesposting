// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYj_yBXWa_iMJ7laAeuZWuAyho6pEY7Gs",
  authDomain: "joshuawork-3c336.firebaseapp.com",
  projectId: "joshuawork-3c336",
  storageBucket: "joshuawork-3c336.appspot.com",
  messagingSenderId: "746981180889",
  appId: "1:746981180889:web:814a5ef16b58d30c7b45c8",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const storage = getStorage(app);
// Sign in using a popup.
const provider = new GoogleAuthProvider();

export { db, auth, provider, storage };
