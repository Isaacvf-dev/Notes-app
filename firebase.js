import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA0UeBN5UF_9TYWsXgbtqMm3DFAStR2N8M",
  authDomain: "react-notes-dc524.firebaseapp.com",
  projectId: "react-notes-dc524",
  storageBucket: "react-notes-dc524.appspot.com",
  messagingSenderId: "994234695665",
  appId: "1:994234695665:web:480555089a953b59de0e50"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")