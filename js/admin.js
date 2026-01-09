import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addCollegeForm");
  const list = document.getElementById("collegeList");

  if (!form || !list) {
    console.error("Admin elements not found in HTML");
    return;
  }

  // ADD COLLEGE
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const college = {
      name: document.getElementById("collegeName").value,
      location: document.getElementById("location").value,
      fees: document.getElementById("fees").value,
      placement: document.getElementById("placement").value,
      image: document.getElementById("image").value,
      description: document.getElementById("description").value,
    };

    await addDoc(collection(db, "colleges"), college);
    form.reset();
    loadColleges();
  });

  // LOAD COLLEGES
  async function loadColleges() {
    list.innerHTML = "";

    const snapshot = await getDocs(collection(db, "colleges"));
    snapshot.forEach((d) => {
      const c = d.data();
      const div = document.createElement("div");
      div.className = "college-item";

      div.innerHTML = `
        <strong>${c.name}</strong> — ${c.location}
        <button data-id="${d.id}">Delete</button>
      `;

      div.querySelector("button").onclick = async () => {
        await deleteDoc(doc(db, "colleges", d.id));
        loadColleges();
      };

      list.appendChild(div);
    });
  }

  loadColleges();
});
