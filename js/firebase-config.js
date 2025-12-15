/// public/js/firebase-config.js
// ----- Replace the config below with your project's config -----
const firebaseConfig = {
  apiKey: "AIzaSyBkQejhE37uGFsf-D7cFRD--2Zzmf3p8Mo",
  authDomain: "career-guidance-34c89.firebaseapp.com",
  projectId: "career-guidance-34c89",
  storageBucket: "career-guidance-34c89.firebasestorage.app",
  messagingSenderId: "390935655140",
  appId: "1:390935655140:web:7d2227a2429f5d1774f2f1",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// expose auth and firestore globally (so other scripts use `auth` and `db`)
window.auth = firebase.auth();
window.db = firebase.firestore();
