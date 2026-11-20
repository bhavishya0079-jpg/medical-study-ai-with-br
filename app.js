
/* =====================================
   MEDICAL STUDY AI WITH BR
   Main Application JavaScript
===================================== */

/* ---------- Navigation ---------- */

function openMode(mode) {
  if (mode === "BHMS" || mode === "bhms") {
    window.location.href = "bhms.html";
  } else if (mode === "Allopathy" || mode === "allopathy") {
    window.location.href = "allopathy.html";
  }
}

function goToPage(page) {
  const allowedPages = [
    "index.html",
    "bhms.html",
    "allopathy.html",
    "medicine.html",
    "papers.html",
    "notes.html",
    "quiz.html"
  ];

  if (allowedPages.includes(page)) {
    window.location.href = page;
  }
}

function goHome() {
  window.location.href = "index.html";
}

/* ---------- Display Cards ---------- */

function createFeatureCard(feature) {
  return `
    <div class="card">
      <h3>${escapeHTML(feature.icon || "📘")} ${escapeHTML(feature.name)}</h3>
      <p>${escapeHTML(feature.description || "")}</p>
      <br>
      <button onclick="goToPage('${escapeHTML(feature.page)}')">
        Open
      </button>
    </div>
  `;
}

function renderFeatures(containerId, features) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(features)) return;

  container.innerHTML = features.map(createFeatureCard).join("");
}

/* ---------- BHMS Year Cards ---------- */

function renderBHMSYears(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof BHMS_YEARS === "undefined") return;

  container.innerHTML = BHMS_YEARS.map(year => `
    <div class="card">
      <h3>${escapeHTML(year.name)}</h3>
      <p>${year.subjects.map(escapeHTML).join(" • ")}</p>
    </div>
  `).join("");
}

/* ---------- Search ---------- */

function searchItems(inputId, containerId) {
  const input = document.getElementById(inputId);
  const container = document.getElementById(containerId);

  if (!input || !container) return;

  const query = input.value.trim().toLowerCase();
  const items = container.querySelectorAll(".card");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? "" : "none";
  });
}

function searchMedicines(inputId, resultId) {
  const input = document.getElementById(inputId);
  const result = document.getElementById(resultId);

  if (!input || !result) return;

  const query = input.value.trim().toLowerCase();

  if (typeof MEDICINE_DATABASE === "undefined") return;

  const medicines = MEDICINE_DATABASE.filter(medicine => {
    return [
      medicine.name,
      medicine.genericName,
      medicine.category,
      ...(medicine.brandNames || [])
    ].join(" ").toLowerCase().includes(query);
  });

  if (medicines.length === 0) {
    result.innerHTML = "<p>No matching medicine found.</p>";
    return;
  }

  result.innerHTML = medicines.map(medicine => `
    <div class="card">
      <h3>${escapeHTML(medicine.name)}</h3>
      <p><b>Generic:</b> ${escapeHTML(medicine.genericName)}</p>
      <p><b>Category:</b> ${escapeHTML(medicine.category)}</p>
      <button onclick="showMedicine('${escapeHTML(medicine.id)}')">
        View Details
      </button>
    </div>
  `).join("");
}

/* ---------- Medicine Details ---------- */

function showMedicine(id) {
  if (typeof MEDICINE_DATABASE === "undefined") return;

  const medicine = MEDICINE_DATABASE.find(item => item.id === id);
  if (!medicine) return;

  const result = document.getElementById("medicineDetails");
  if (!result) return;

  result.innerHTML = `
    <div class="card">
      <h2>${escapeHTML(medicine.name)}</h2>
      <p><b>Generic Name:</b> ${escapeHTML(medicine.genericName)}</p>
      <p><b>Composition:</b> ${escapeHTML(medicine.composition)}</p>
      <p><b>Gujarati:</b> ${escapeHTML(medicine.gujaratiName || "")}</p>
      <p><b>Pronunciation:</b> ${escapeHTML(medicine.pronunciation || "")}</p>
      <p><b>Category:</b> ${escapeHTML(medicine.category)}</p>

      <h3>Uses</h3>
      <ul>${medicine.uses.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>

      <h3>Possible Side Effects</h3>
      <ul>${medicine.sideEffects.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>

      <h3>Precautions</h3>
      <ul>${medicine.precautions.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>

      <p>${escapeHTML(medicine.disclaimer)}</p>
    </div>
  `;
}

/* ---------- Paper Display ---------- */

function renderPapers(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof PAPER_DATABASE === "undefined") return;

  if (PAPER_DATABASE.length === 0) {
    container.innerHTML = `
      <div class="card">
        <h3>Question Papers</h3>
        <p>Verified HNGU papers will be added here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = PAPER_DATABASE.map(paper => `
    <div class="card">
      <h3>${escapeHTML(paper.subject)}</h3>
      <p>${escapeHTML(paper.year)} - ${escapeHTML(paper.bhmsYear)}</p>
      <p>${paper.verified ? "Verified HNGU Paper" : "Unverified Paper"}</p>
      ${paper.file ? `<a href="${escapeHTML(paper.file)}" target="_blank" rel="noopener">Open Paper</a>` : ""}
    </div>
  `).join("");
}

/* ---------- Notes Display ---------- */

function renderNotes(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof NOTES_DATABASE === "undefined") return;

  if (NOTES_DATABASE.length === 0) {
    container.innerHTML = "<p>Study notes will be added here.</p>";
    return;
  }

  container.innerHTML = NOTES_DATABASE.map(note => `
    <div class="card">
      <h3>${escapeHTML(note.topic)}</h3>
      <p>${escapeHTML(note.subject)}</p>
      <p>${escapeHTML(note.englishContent)}</p>
      <p>${escapeHTML(note.gujaratiExplanation)}</p>
    </div>
  `).join("");
}

/* ---------- MCQ Quiz ---------- */

let currentQuestion = 0;
let quizScore = 0;

function startQuiz() {
  currentQuestion = 0;
  quizScore = 0;
  showQuizQuestion();
}

function showQuizQuestion() {
  const container = document.getElementById("quizContainer");
  if (!container || typeof MCQ_DATABASE === "undefined") return;

  if (currentQuestion >= MCQ_DATABASE.length) {
    container.innerHTML = `
      <div class="card">
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${quizScore}/${MCQ_DATABASE.length}</p>
        <button onclick="startQuiz()">Restart Quiz</button>
      </div>
    `;
    return;
  }

  const question = MCQ_DATABASE[currentQuestion];

  container.innerHTML = `
    <div class="card">
      <p>Question ${currentQuestion + 1} of ${MCQ_DATABASE.length}</p>
      <h3>${escapeHTML(question.question)}</h3>
      ${question.options.map((option, index) => `
        <button class="quiz-option"
          style="display:block;width:100%;margin:8px 0;text-align:left"
          onclick="checkAnswer(${index})">
          ${escapeHTML(option)}
        </button>
      `).join("")}
      <p id="quizFeedback"></p>
    </div>
  `;
}

function checkAnswer(index) {
  const question = MCQ_DATABASE[currentQuestion];
  if (!question) return;

  const selected = question.options[index];
  const feedback = document.getElementById("quizFeedback");

  if (selected === question.answer) {
    quizScore++;
    feedback.textContent = "Correct Answer!";
  } else {
    feedback.textContent = "Correct answer: " + question.answer;
  }

  const buttons = document.querySelectorAll(".quiz-option");
  buttons.forEach(button => button.disabled = true);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next Question";
  nextButton.onclick = () => {
    currentQuestion++;
    showQuizQuestion();
  };

  feedback.after(nextButton);
}

/* ---------- Viva Display ---------- */

function renderViva(containerId) {
  const container = document.getElementById(containerId);
  if (!container || typeof VIVA_DATABASE === "undefined") return;

  container.innerHTML = VIVA_DATABASE.length
    ? VIVA_DATABASE.map(item => `
      <div class="card">
        <h3>${escapeHTML(item.question)}</h3>
        <p>${escapeHTML(item.answer)}</p>
        <p>${escapeHTML(item.gujaratiExplanation)}</p>
      </div>
    `).join("")
    : "<p>Viva questions will be added here.</p>";
}

/* ---------- Image Preview ---------- */

function previewImage(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);

  if (!input || !preview || !input.files || !input.files[0]) return;

  const file = input.files[0];

  if (!file.type.startsWith("image/")) {
    preview.textContent = "Please select an image file.";
    return;
  }

  const reader = new FileReader();

  reader.onload = function(event) {
    preview.innerHTML = `
      <img
        src="${event.target.result}"
        alt="Uploaded preview"
        style="max-width:100%;border-radius:12px"
      >
    `;
  };

  reader.readAsDataURL(file);
}

/* ---------- Safe Text Output ---------- */

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

/* ---------- Initialisation ---------- */

document.addEventListener("DOMContentLoaded", function() {
  renderBHMSYears("bhmsYears");
  renderFeatures("bhmsFeatures", BHMS_FEATURES);
  renderFeatures("allopathyFeatures", ALLOPATHY_FEATURES);
  renderPapers("papersList");
  renderNotes("notesList");
  renderViva("vivaList");
});
