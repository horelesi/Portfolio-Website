// Your public URLs
const portfolioURL = "https://horelesi.github.io/Portfolio-Website/";
const githubPortfolio = "https://github.com/horelesi/Portfolio-Website";
const githubChatbot = "https://github.com/horelesi/Chatbot-website";
const chatbotDemo = "https://horelesi.github.io/Chatbot-website/";

// PROJECTS DATA
const projects = [
  {
    title: "Campus Helper Chatbot",
    description:
      "IBM Watson Assistant chatbot hosted on GitHub Pages to assist students with campus information.",
    github: githubChatbot,
    demo: chatbotDemo
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with HTML, CSS, and JavaScript, featuring dark mode, animations, QR code, and chatbot.",
    github: githubPortfolio,
    demo: portfolioURL
  },
  {
    title: "Network Security Lab (Concept)",
    description:
      "Hands-on practice lab focusing on firewalls, VPNs, packet capture, and network analysis using tools like Palo Alto and Wireshark.",
    github: githubPortfolio,
    demo: portfolioURL
  }
];

// RENDER PROJECTS INTO HTML
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projectGrid");
  if (!container) return;

  projects.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "card fade-in-up";

    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="buttons">
        <a href="${p.github}" target="_blank" rel="noopener" class="btn ghost">GitHub</a>
        <a href="${p.demo}" target="_blank" rel="noopener" class="btn primary">Live Demo</a>
      </div>
    `;

    // Slight stagger on animation
    card.style.animationDelay = `${0.05 * index}s`;

    container.appendChild(card);
  });
});
