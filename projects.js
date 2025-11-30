// List of projects displayed on the portfolio
const projects = [
  {
    title: "Campus Helper Chatbot",
    description: "IBM Watson Assistant chatbot hosted on GitHub Pages to help students with campus information.",
    github: "https://github.com/horelesi/Chatbot-website",
    demo: "https://horelesi.github.io/Chatbot-website/"
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio built with HTML, CSS, and JavaScript, featuring a chatbot and animations.",
    github: "https://github.com/horelesi/Portfolio-Website",
    demo: "https://horelesi.github.io/Portfolio-Website/"
  },
  {
    title: "Network Security Lab (Concept)",
    description: "Practice lab focusing on firewalls, VPNs, packet capture, and network analysis using Palo Alto and Wireshark.",
    github: "https://github.com/horelesi",  // Replace with future repo if you create one
    demo: "#"  // No live demo yet, so keep # or remove button later
  }
];

// Renders project cards into the HTML
function loadProjects() {
  const grid = document.getElementById("projectGrid");

  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.classList.add("card", "fade");

    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <div class="buttons">
        <a href="${proj.github}" class="btn github" target="_blank">GitHub</a>
        <a href="${proj.demo}" class="btn live" target="_blank">Live Demo</a>
      </div>
    `;

    grid.appendChild(card);
  });
}

loadProjects();
