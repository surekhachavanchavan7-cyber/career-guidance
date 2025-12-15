/// ========== LOAD COLLEGES FOR STUDENT PAGE ==========
window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("collegeContainer")) {
    loadColleges();
  }
});

// Fetch and display colleges
function loadColleges() {
  const collegeContainer = document.getElementById("collegeContainer");
  const searchBox = document.getElementById("searchBox");

  db.collection("colleges").onSnapshot((snapshot) => {
    let colleges = [];
    snapshot.forEach((doc) => {
      colleges.push({ id: doc.id, ...doc.data() });
    });

    displayColleges(colleges);

    // Search filter
    searchBox.addEventListener("input", () => {
      const text = searchBox.value.toLowerCase();
      const filtered = colleges.filter((c) =>
        c.name.toLowerCase().includes(text)
      );
      displayColleges(filtered);
    });
  });
}

// Display card UI
function displayColleges(colleges) {
  const collegeContainer = document.getElementById("collegeContainer");
  collegeContainer.innerHTML = "";

  colleges.forEach((data) => {
    collegeContainer.innerHTML += `
            <div class="college-card">

                <img src="assets/images/${data.image}" alt="${data.name}" class="college-img">

                <h3>${data.name}</h3>
                <p><strong>Location:</strong> ${data.location}</p>
                <p><strong>Fees:</strong> ${data.fees}</p>
                <p><strong>Placement:</strong> ${data.placement}</p>
                <p><strong>Hostel:</strong> ${data.hostel}</p>
                <p><strong>Eligibility:</strong> ${data.eligibility}</p>
                <p><strong>Scholarship:</strong> ${data.scholarship}</p>
                <p><strong>Courses:</strong> ${data.courses}</p>

                <button class="view-btn" onclick="viewCollege('${data.id}')">
                    View More
                </button>

            </div>
        `;
  });
}

// View more redirection
function viewCollege(id) {
  window.location.href = `pages/college-details.html?id=${id}`;
}

// Logout
function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "index.html";
    });
}
