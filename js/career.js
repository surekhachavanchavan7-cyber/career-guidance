/// ========== LOAD COLLEGES FOR STUDENT PAGE ==========
window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("collegeContainer")) {
    loadColleges();
  }
});

// Fetch and display colleges
/*function loadColleges() {
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
}*/

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
function getCareerRecommendation() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  const result = document.getElementById("quizResult");

  if (!q1 || !q2) {
    result.innerText = "Please select all options.";
    return;
  }

  let career = "";

  if (q1.value === "tech" && q2.value === "logic") {
    career = "Software Engineer / Data Analyst";
  } else if (q1.value === "design" || q2.value === "creative") {
    career = "UI / UX Designer";
  } else if (q1.value === "business") {
    career = "MBA / Management";
  } else {
    career = "Explore Engineering Fields";
  }

  result.innerText = "Recommended Career: " + career;

  // ✅ clear radio selection after submit
  document
    .querySelectorAll('input[name="q1"], input[name="q2"]')
    .forEach((r) => {
      r.checked = false;
    });

  // ✅ keep result visible nicely
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function saveCareer(career) {
  let saved = JSON.parse(localStorage.getItem("careers")) || [];
  if (!saved.includes(career)) {
    saved.push(career);
    localStorage.setItem("careers", JSON.stringify(saved));
    alert("Career saved successfully");
    loadSavedCareers();
  }
}

/*function loadSavedCareers() {
  let saved = JSON.parse(localStorage.getItem("careers")) || [];
  const list = document.getElementById("savedCareerList");
  list.innerHTML = "";

  saved.forEach((career) => {
    const li = document.createElement("li");
    li.textContent = career;
    list.appendChild(li);
  });
}

window.onload = loadSavedCareers;*/
