// Import Firebase SDKs (CDN version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkQejhE37uGFsf-D7cFRD--2Zzmf3p8Mo",
  authDomain: "career-guidance-34c89.firebaseapp.com",
  projectId: "career-guidance-34c89",
  storageBucket: "career-guidance-34c89.appspot.com", // ✅ FIXED
  messagingSenderId: "390935655140",
  appId: "1:390935655140:web:7d2227a2429f5d1774f2f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
