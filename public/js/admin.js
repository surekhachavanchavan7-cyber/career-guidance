const collegeList = document.getElementById("collegeList");

// =======================
// LOAD COLLEGES
// =======================
async function loadColleges() {
  collegeList.innerHTML = "";

  const snapshot = await db.collection("colleges").get();

  if (snapshot.empty) {
    collegeList.innerHTML = "<p>No colleges found.</p>";
    return;
  }

  snapshot.forEach((doc) => {
    const col = doc.data();

    const card = document.createElement("div");
    card.classList.add("college-card");

    card.innerHTML = `
      <img src="assets/images/${col.image}" class="college-img">
      <h3>${col.name}</h3>
      <p><b>Description:</b> ${col.description}</p>
      <p><b>Location:</b> ${col.location}</p>
      <p><b>Fees:</b> ${col.fees}</p>
      <p><b>Placement:</b> ${col.placement}</p>
      <p><b>Hostel:</b> ${col.hostel}</p>
      <p><b>Eligibility:</b> ${col.eligibility}</p>
      <p><b>Scholarship:</b> ${col.scholarship}</p>
      <p><b>Courses:</b> ${col.courses.join(", ")}</p>
    `;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => editCollege(doc.id);

    card.appendChild(editBtn);
    collegeList.appendChild(card);
  });
}

// =======================
// EDIT COLLEGE (FIXED)
// =======================
function editCollege(id) {
  window.location.href = "pages/edit-college.html?id=" + id;
}

// =======================
// PAGE LOAD
// =======================
window.onload = loadColleges;
