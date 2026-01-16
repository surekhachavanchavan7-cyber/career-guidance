/* ================================
   GLOBAL STATE
================================ */
let selectedCourse = null;
/* ================================
   SEED COLLEGES DATA (RUNS ONCE)
================================ */
if (!localStorage.getItem("colleges")) {
  const colleges = [
    {
      id: 1,
      name: "BMS College of Engineering",
      location: "Bengaluru",
      fees: "₹2.5L",
      placement: 92,
      course: "engineering",
      image: "bms.jpg",
    },
    {
      id: 2,
      name: "RV College of Engineering",
      location: "Bengaluru",
      fees: "₹2.8L",
      placement: 95,
      course: "engineering",
      image: "rv.jpg",
    },
    {
      id: 3,
      name: "PES University",
      location: "Bengaluru",
      fees: "₹3.2L",
      placement: 90,
      course: "engineering",
      image: "pes.jpg",
    },
    {
      id: 4,
      name: "National Institute of Design",
      location: "Ahmedabad",
      fees: "₹2.0L",
      placement: 85,
      course: "design",
      image: "nid.jpg",
    },
    {
      id: 5,
      name: "MS Ramaiah Institute of Technology",
      location: "Bengaluru",
      fees: "₹2.4L",
      placement: 88,
      course: "engineering",
      image: "msrit.jpg",
    },
    {
      id: 6,
      name: "Dayananda Sagar College of Engineering",
      location: "Bengaluru",
      fees: "₹2.2L",
      placement: 86,
      course: "engineering",
      image: "dsce.jpg",
    },
    {
      id: 7,
      name: "Jain University",
      location: "Bengaluru",
      fees: "₹2.6L",
      placement: 84,
      course: "engineering",
      image: "jain.jpg",
    },
  ];

  localStorage.setItem("colleges", JSON.stringify(colleges));
}

/* ================================
   LOAD COLLEGES (INITIAL)
================================ */
document.addEventListener("DOMContentLoaded", () => {
  loadColleges();
  initCareerCards();
  initCourseCards();
});

/* ================================
   LOAD ALL COLLEGES
================================ */
function loadColleges(list = null) {
  const container = document.getElementById("collegeContainer");
  if (!container) return;

  const colleges = list || JSON.parse(localStorage.getItem("colleges")) || [];

  container.innerHTML = "";

  if (colleges.length === 0) {
    container.innerHTML = "<p>No colleges available</p>";
    return;
  }

  colleges.forEach((c) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img class="college-img"
           src="assets/images/${c.image || "default.jpg"}"
           onerror="this.src='assets/images/default.jpg'">

      <h4>${c.name}</h4>
      <p>${c.location}</p>
      <p>Fees: ${c.fees}</p>
      <p>Placement: ${c.placement}%</p>

      <a href="pages/college-details.html?id=${c.id}">
        View Details
      </a>
    `;

    container.appendChild(div);
  });
}

/* ================================
   QUIZ LOGIC
================================ */
window.showQuizResult = function () {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const result = document.getElementById("quizResult");

  if (!q1 || !q2) {
    result.innerText = "Please answer all questions.";
    result.style.color = "red";
    return;
  }

  let career = "";

  if (q1.value === "tech" && q2.value === "logic") {
    career = "Software Engineer";
    selectedCourse = "engineering";
  } else if (q1.value === "data" || q2.value === "analysis") {
    career = "Data Analyst";
    selectedCourse = "engineering";
  } else {
    career = "UI / UX Designer";
    selectedCourse = "design";
  }

  result.innerHTML = `Suggested Career: <b>${career}</b>`;
  result.style.color = "green";

  filterCollegesByCourse();
};

/* ================================
   CAREER CARD CLICK
================================ */
function initCareerCards() {
  const careerMap = {
    "Software Engineer": "engineering",
    "Data Analyst": "engineering",
    "UI / UX Designer": "design",
    "Cyber Security Analyst": "engineering",
  };

  document.querySelectorAll(".career-card").forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h4").innerText;
      selectedCourse = careerMap[title];

      document.getElementById("careerResult").style.display = "block";
      document.getElementById("careerTitle").innerText = title;
      document.getElementById("careerDescription").innerText =
        "Career path selected based on your interest.";
      document.getElementById("careerCourses").innerText =
        selectedCourse.toUpperCase();
      document.getElementById("careerExams").innerText =
        selectedCourse === "engineering" ? "JEE, KCET" : "NIFT, NID, UCEED";

      filterCollegesByCourse();
    });
  });
}

/* ================================
   COURSE CARD CLICK
================================ */
function initCourseCards() {
  document.querySelectorAll(".course-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedCourse = card.dataset.course;

      const data = courseData[selectedCourse];
      if (!data) return;

      const courseResult = document.getElementById("courseResult");
      courseResult.style.display = "block";
      courseResult.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <p><strong>Entrance Exams:</strong> ${data.exams}</p>
      `;

      filterCollegesByCourse();
    });
  });
}

/* ================================
   COURSE DATA
================================ */
const courseData = {
  engineering: {
    title: "Engineering",
    description:
      "Engineering careers include Software, Mechanical, Civil, Electrical.",
    exams: "JEE Main, JEE Advanced, KCET",
  },
  medical: {
    title: "Medical",
    description: "Medical careers include Doctor, Surgeon, Researcher.",
    exams: "NEET",
  },
  mba: {
    title: "Management (MBA)",
    description: "Management careers include HR, Marketing, Finance.",
    exams: "CAT, XAT, CMAT, MAT",
  },
  design: {
    title: "Design",
    description: "Design careers include UI/UX, Fashion, Product Design.",
    exams: "NIFT, NID, UCEED",
  },
};

/* ================================
   FILTER COLLEGES BY COURSE
================================ */
function filterCollegesByCourse() {
  if (!selectedCourse) return;

  const colleges = JSON.parse(localStorage.getItem("colleges")) || [];

  const filtered = colleges.filter(
    (c) => c.course && c.course.toLowerCase() === selectedCourse.toLowerCase()
  );

  loadColleges(filtered);
}
