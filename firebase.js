import firebase from "firebase/compat/app";
import "firebase/storage";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWtUYe50Io2VmoPVd6hvCezo39rvU8Ia0",
  authDomain: "book-clone.firebaseapp.com",
  projectId: "book-clone",
  storageBucket: "book-clone.appspot.com",
  messagingSenderId: "121477875106",
  appId: "1:121477875106:web:bd64edf69c47175b365efb",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = getStorage();

export { db, storage };
