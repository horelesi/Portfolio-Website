// ==========================
//  PROJECT LIST
// ==========================

const projects = [
    {
        title: "Campus Helper Chatbot",
        description: "IBM Watson Assistant chatbot hosted on GitHub Pages to help students with campus information.",
        github: "https://github.com/horelesi/Campus-Helper-Chatbot",
        demo: "https://horelesi.github.io/Campus-Helper-Chatbot/"
    },
    {
        title: "Portfolio Website",
        description: "Responsive personal portfolio built with HTML, CSS, and JavaScript, featuring a chatbot and animations.",
        github: "https://github.com/horelesi/Portfolio-Website",
        demo: "https://horelesi.github.io/Portfolio-Website/"
    },
    {
        title: "Network Security Lab (Concept)",
        description: "Hands-on practice lab focusing on firewalls, VPNs, packet capture, and network analysis using Palo Alto and Wireshark.",
        github: "https://github.com/horelesi/Network-Security-Lab",
        demo: "#"
    }
];

// ==========================
//  RENDER PROJECT CARDS
// ==========================

function loadProjects() {
    const grid = document.getElementById("projectGrid");

    if (!grid) {
        console.error("❌ projectGrid NOT FOUND in HTML.");
        return;
    }

    projects.forEach(proj => {
        const card = document.createElement("div");
        card.className = "card fade";

        card.innerHTML = `
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div class="buttons">
                <a href="${proj.github}" target="_blank" class="btn github">GitHub</a>
                <a href="${proj.demo}" target="_blank" class="btn demo">Live Demo</a>
            </div>
        `;

        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);

