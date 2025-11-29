// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const visible = navLinks.style.display === "flex";
  navLinks.style.display = visible ? "none" : "flex";
});

// Render projects from PROJECTS array
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid || !Array.isArray(PROJECTS)) return;

  grid.innerHTML = PROJECTS.map(p => {
    const badges = (p.badges || [])
      .map(b => `<span class="badge-pill">${b}</span>`)
      .join("");

    return `
      <article class="project-card">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        ${badges ? `<div class="project-badges">${badges}</div>` : ""}
        <div class="project-buttons">
          <a class="btn primary" href="${p.github}" target="_blank" rel="noopener">GitHub</a>
          ${p.demo ? `<a class="btn dark" href="${p.demo}" target="_blank" rel="noopener">Live Demo</a>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

renderProjects();

// Generate QR code for current URL
if (window.QRCode) {
  new QRCode(document.getElementById("qrcode"), {
    text: window.location.href,
    width: 140,
    height: 140
  });
}

// Chatbot UI
const chatFab = document.getElementById("chatToggle");
const chatPanel = document.getElementById("chatPanel");
const chatClose = document.getElementById("chatClose");
const chatBody = document.getElementById("chatBody");
const chatForm = document.getElementById("chatForm");
const chatText = document.getElementById("chatText");

function addMessage(who, text) {
  const div = document.createElement("div");
  div.className = "msg " + who;
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

chatFab.addEventListener("click", () => {
  chatPanel.style.display = "flex";
  chatPanel.setAttribute("aria-hidden", "false");
  if (!chatBody.dataset.started) {
    addMessage("bot", "Hi, I’m your Portfolio Bot. Ask me about my skills, projects, or experience.");
    chatBody.dataset.started = "true";
  }
});

chatClose.addEventListener("click", () => {
  chatPanel.style.display = "none";
  chatPanel.setAttribute("aria-hidden", "true");
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatText.value.trim();
  if (!text) return;
  addMessage("user", text);
  chatText.value = "";
  const reply = getBotReply(text);
  addMessage("bot", reply);
});

// Scroll reveal animations
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach(el => observer.observe(el));
