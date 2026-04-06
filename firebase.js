import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVIQ4S-w4Ag40uYuArW3o7Hw2XQwoQV7U",
  authDomain: "montcode-e02c7.firebaseapp.com",
  databaseURL: "https://montcode-e02c7-default-rtdb.firebaseio.com",
  projectId: "montcode-e02c7",
  storageBucket: "montcode-e02c7.firebasestorage.app",
  messagingSenderId: "988300151844",
  appId: "1:988300151844:web:b1a31275a9555de98a9cb1"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue, push };
