// js/auth.js
// Firebase Authentication – Login + Signup (v10)

import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* =========================
   LOGIN
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // simple role logic
          if (email.toLowerCase().includes("admin")) {
            window.location.href = "admin.html";
          } else {
            window.location.href = "student.html";
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  }
});

/* =========================
   SIGNUP
========================= */
window.signup = function () {
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created successfully!");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
