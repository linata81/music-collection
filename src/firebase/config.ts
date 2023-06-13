import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQoam_7B90vg3RjGeX8gmE8QywvENwyN4",
  authDomain: "music-collection-7da6e.firebaseapp.com",
  projectId: "music-collection-7da6e",
  storageBucket: "music-collection-7da6e.appspot.com",
  messagingSenderId: "173729566240",
  appId: "1:173729566240:web:39b91d164386487d01f645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}