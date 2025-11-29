// List your projects here
const PROJECTS = [
  {
    title: "Campus Helper Chatbot",
    summary: "IBM Watson Assistant chatbot hosted on GitHub Pages to assist students with campus information.",
    github: "https://github.com/horelesi/Chatbot-website",
    demo: "https://horelesi.github.io/Chatbot-website/"
  },
  {
    title: "Portfolio Website",
    summary: "This responsive portfolio built with HTML, CSS, and JavaScript, including a custom chatbot and QR code.",
    github: "https://github.com/horelesi/Portfolio-Website",
    demo: "https://horelesi.github.io/Portfolio-Website/"
  },
  {
    title: "Network Security Lab (Concept)",
    summary: "Hands-on practice lab focusing on VPN, firewall rules, and traffic inspection using tools like Palo Alto and Wireshark.",
    github: "https://github.com/horelesi",  // can point to your profile
    demo: ""
  }
];

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <article class="card">
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <p>
        <a class="btn primary" href="${p.github}" target="_blank" rel="noopener">GitHub</a>
        ${p.demo ? `<a class="btn secondary" href="${p.demo}" target="_blank" rel="noopener">Live Demo</a>` : ""}
      </p>
    </article>
  `).join("");
}
