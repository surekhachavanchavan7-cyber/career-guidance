// =========================
// Firebase Authentication
// =========================

// SIGN UP
function signup() {
  const email = document.getElementById("signupEmail")?.value.trim();
  const password = document.getElementById("signupPassword")?.value;

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account Created Successfully!");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// LOGIN
function login() {
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      if (email === "admin@gmail.com") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "student.html";
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}

// LOGOUT
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// =========================
// AUTH PAGE PROTECTION (IMPORTANT)
// =========================
auth.onAuthStateChanged((user) => {
  const publicPages = ["index.html", "create-account.html"];
  const currentPage = window.location.pathname.split("/").pop();

  if (!user && !publicPages.includes(currentPage)) {
    window.location.href = "../index.html";
  }
});
