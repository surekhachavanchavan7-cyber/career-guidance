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
// Career Assessment Quiz Logic
// Career Assessment Quiz Logic
window.submitQuiz = function () {
  const selected = document.querySelector('input[name="q1"]:checked');
  const resultDiv = document.getElementById("quizResult");

  if (!resultDiv) return;

  if (!selected) {
    resultDiv.innerHTML = "❌ Please select an option.";
    resultDiv.style.color = "red";
    return;
  }

  let career = "";

  if (selected.value === "tech") career = "Software Engineer";
  if (selected.value === "data") career = "Data Analyst";
  if (selected.value === "design") career = "UI / UX Designer";

  resultDiv.innerHTML = `✅ Suggested Career Path: <b>${career}</b>`;
  resultDiv.style.color = "green";
};
