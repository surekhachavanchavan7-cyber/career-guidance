function addCollege() {
  const name = document.getElementById("collegeName").value;
  const fees = document.getElementById("fees").value;
  const placement = document.getElementById("placement").value;
  const hostel = document.getElementById("hostel").value;
  const eligibility = document.getElementById("eligibility").value;
  const scholarship = document.getElementById("scholarship").value;
  const courses = document.getElementById("courses").value.split(",");

  if (!name) {
    alert("College name is required.");
    return;
  }

  db.collection("colleges")
    .add({
      name: name,
      fees: fees,
      placement: placement,
      hostel: hostel,
      eligibility: eligibility,
      scholarship: scholarship,
      courses: courses,
    })
    .then(() => {
      alert("College added successfully!");

      // Clear input fields
      document.getElementById("collegeName").value = "";
      document.getElementById("fees").value = "";
      document.getElementById("placement").value = "";
      document.getElementById("hostel").value = "";
      document.getElementById("eligibility").value = "";
      document.getElementById("scholarship").value = "";
      document.getElementById("courses").value = "";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
function loadAdminColleges() {
  db.collection("colleges").onSnapshot((snapshot) => {
    let output = "";

    snapshot.forEach((doc) => {
      const data = doc.data();

      output += `
                <div class="admin-college-card">
                    <h3>${data.name}</h3>
                    <p><strong>Fees:</strong> ${data.fees}</p>
                    <p><strong>Placement:</strong> ${data.placement}</p>
                    <p><strong>Hostel:</strong> ${data.hostel}</p>
                    <p><strong>Eligibility:</strong> ${data.eligibility}</p>
                    <p><strong>Scholarship:</strong> ${data.scholarship}</p>
                    <p><strong>Courses:</strong> ${data.courses.join(", ")}</p>

                    <button class="edit-btn" onclick="editCollege('${
                      doc.id
                    }')">Edit</button>
                    <button class="delete-btn" onclick="deleteCollege('${
                      doc.id
                    }')">Delete</button>
                </div>
            `;
    });

    document.getElementById("adminCollegeList").innerHTML = output;
  });
}
function deleteCollege(id) {
  if (confirm("Are you sure you want to delete this college?")) {
    db.collection("colleges")
      .doc(id)
      .delete()
      .then(() => alert("College deleted!"));
  }
}
function editCollege(id) {
  localStorage.setItem("editCollegeId", id);
  window.location.href = "pages/edit-college.html";
}
function deleteCollege(id) {
  if (confirm("Are you sure you want to delete this college?")) {
    db.collection("colleges")
      .doc(id)
      .delete()
      .then(() => {
        alert("College deleted successfully!");
      })
      .catch((error) => {
        alert("Error deleting college: " + error.message);
      });
  }
}
