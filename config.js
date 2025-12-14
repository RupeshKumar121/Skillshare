import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ============================================================
// PASTE YOUR FIREBASE CONFIG HERE
// (Go to Firebase Console > Project Settings > General > Your Apps)
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyA9Jk0jXfYc5ac61tPAqAEiT3uOscmC52s",
  authDomain: "skillswap-b23e4.firebaseapp.com",
  projectId: "skillswap-b23e4",
  storageBucket: "skillswap-b23e4.firebasestorage.app",
  messagingSenderId: "470726238704",
  appId: "1:470726238704:web:53608bc2e3d1c7fe793d35",
};
// ============================================================
// IMPORTANT FOR GITHUB PAGES DEPLOYMENT:
// 1. Go to Firebase Console -> Authentication -> Settings -> Authorized Domains
// 2. Click "Add Domain"
// 3. Add your GitHub Pages domain (e.g., yourusername.github.io)
// If you skip this, Login/Sign Up will fail with an "Unauthorized Domain" error.
// ============================================================

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  getDocs,
  query,
  where,
};
