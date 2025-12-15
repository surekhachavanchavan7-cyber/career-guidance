/// student.js -- Full working file: load colleges, search, View More button

// -----------------------------
// DOM references
// -----------------------------
const collegeContainer = document.getElementById("collegeContainer");
const searchBox = document.getElementById("searchBox");

// -----------------------------
// Helper: safe image path
// -----------------------------
function getImagePath(imageFileName) {
  if (!imageFileName || imageFileName.trim() === "") {
    return "assets/images/default.jpg"; // put a default.jpg in assets/images
  }
  return `assets/images/${imageFileName}`;
}

// -----------------------------
// View more: go to details page
// -----------------------------
function viewCollege(collegeId) {
  // navigate with query param so details page can fetch by id
  window.location.href = `pages/college-details.html?id=${encodeURIComponent(
    collegeId
  )}`;
}

// -----------------------------
// Render single card
// -----------------------------
function createCollegeCard(doc) {
  const c = doc.data();
  const imgSrc = getImagePath(c.image);

  const card = document.createElement("div");
  card.className = "college-card";

  // Normalize courses: could be string or array
  const coursesText = Array.isArray(c.courses)
    ? c.courses.join(", ")
    : c.courses || "";

  card.innerHTML = `
    <img src="${imgSrc}" class="college-img" alt="${
    c.name || "College"
  } image" onerror="this.src='assets/images/default.jpg'">

    <div class="college-info">
      <h3 class="college-name">${c.name || "Unnamed College"}</h3>
      <p><strong>Description:</strong> ${c.description || "-"}</p>
      <p><strong>Location:</strong> ${c.location || "-"}</p>
      <p><strong>Fees:</strong> ${c.fees || "-"}</p>
      <p><strong>Placement:</strong> ${
        c.placement !== undefined ? c.placement + "%" : "-"
      }</p>
      <p><strong>Hostel:</strong> ${c.hostel || "-"}</p>
      <p><strong>Eligibility:</strong> ${c.eligibility || "-"}</p>
      <p><strong>Scholarship:</strong> ${c.scholarship || "No"}</p>
      <p><strong>Courses:</strong> ${coursesText}</p>

      <div style="margin-top:12px;">
        <button class="view-btn" onclick="viewCollege('${
          doc.id
        }')">View More</button>
      </div>
    </div>
  `;

  return card;
}

// -----------------------------
// Load all colleges from Firestore
// -----------------------------
function loadColleges() {
  // ensure db exists
  if (typeof db === "undefined") {
    console.error(
      "Firestore 'db' is not defined. Make sure firebase-config.js was loaded before this script."
    );
    return;
  }

  // Clear container and show a loading placeholder (optional)
  collegeContainer.innerHTML = `<p style="padding:20px;color:#666">Loading colleges...</p>`;

  db.collection("colleges")
    .orderBy("name", "asc")
    .get()
    .then((snapshot) => {
      collegeContainer.innerHTML = ""; // clear
      if (snapshot.empty) {
        collegeContainer.innerHTML = `<p style="padding:20px;color:#666">No colleges found.</p>`;
        return;
      }

      snapshot.forEach((doc) => {
        const card = createCollegeCard(doc);
        collegeContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error loading colleges:", error);
      collegeContainer.innerHTML = `<p style="padding:20px;color:#c00">Error loading colleges. Check console.</p>`;
    });
}

// -----------------------------
// Search/filter UI (client-side)
// -----------------------------
function filterCardsByText(text) {
  const t = text.trim().toLowerCase();
  const cards = document.querySelectorAll(".college-card");
  cards.forEach((card) => {
    const visible = card.innerText.toLowerCase().includes(t);
    card.style.display = visible ? "block" : "none";
  });
}

if (searchBox) {
  searchBox.addEventListener("input", (e) => {
    filterCardsByText(e.target.value || "");
  });
}

// -----------------------------
// Initialize
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  loadColleges();
});
