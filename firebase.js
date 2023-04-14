// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_API,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE,
  messagingSenderId: process.env.NEXT_MESSAGING,
  appId: process.env.NEXT_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const db = getFirestore
export default auth = getAuth(app);