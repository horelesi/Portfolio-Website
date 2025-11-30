// Project data
const projects = [
    {
        title: "Campus Helper Chatbot",
        description: "IBM Watson Assistant chatbot hosted on GitHub Pages to assist students with campus information.",
        github: "https://github.com/horelesi/Chatbot-website", 
        live: "https://horelesi.github.io/Chatbot-website/"
    },
    {
        title: "Portfolio Website",
        description: "Responsive personal portfolio built with HTML, CSS, and JavaScript, featuring a chatbot and animations.",
        github: "https://github.com/horelesi/Portfolio-Website",
        live: "https://horelesi.github.io/Portfolio-Website/"
    },
    {
        title: "Network Security Lab (Concept)",
        description: "Hands-on practice lab focusing on firewalls, VPNs, packet capture, and network analysis using Palo Alto and Wireshark.",
        github: "https://github.com/horelesi", 
        live: "#" // No demo yet — you can change this later
    }
];

// Load projects into the page
const projectGrid = document.getElementById("projectGrid");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        
        <div class="btn-group">
            <a href="${project.github}" class="btn" target="_blank">GitHub</a>
            <a href="${project.live}" class="btn dark" target="_blank">Live Demo</a>
        </div>
    `;

    projectGrid.appendChild(card);
});
