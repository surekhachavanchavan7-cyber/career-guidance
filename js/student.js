document.addEventListener("DOMContentLoaded", loadColleges);

function loadColleges() {
  const container = document.getElementById("collegeContainer");
  if (!container) return;

  const colleges = JSON.parse(localStorage.getItem("colleges")) || [];
  container.innerHTML = "";

  if (colleges.length === 0) {
    container.innerHTML = "<p>No colleges available</p>";
    return;
  }

  colleges.forEach((c) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="assets/images/${c.image}" 
           onerror="this.src='assets/images/default.jpg'" 
           class="college-img">

      <h4>${c.name}</h4>
      <p>${c.location}</p>
      <p>Fees: ${c.fees}</p>
      <p>Placement: ${c.placement}%</p>
    `;

    container.appendChild(div);
  });
}
