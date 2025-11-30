// Your public URLs
const portfolioURL = "https://horelesi.github.io/Portfolio-Website/";
const githubPortfolio = "https://github.com/horelesi/Portfolio-Website";
const githubChatbot = "https://github.com/horelesi/Chatbot-website";
const chatbotDemo = "https://horelesi.github.io/Chatbot-website/";

// PROJECTS DATA
const projects = [
    {
        title: "Campus Helper Chatbot",
        description: "IBM Watson Assistant chatbot hosted on GitHub Pages to assist students with campus information.",
        github: githubChatbot,
        demo: chatbotDemo
    },
    {
        title: "Portfolio Website",
        description: "Responsive personal portfolio built with HTML, CSS, and JavaScript, featuring animations and a chatbot.",
        github: githubPortfolio,
        demo: portfolioURL
    },
    {
        title: "Network Security Lab (Concept)",
        description: "Hands-on practice lab focusing on firewalls, VPNs, packet capture, and network analysis using Palo Alto and Wireshark.",
        github: githubPortfolio,  
        demo: portfolioURL
    }
];

// RENDER PROJECTS INTO HTML
const container = document.getElementById("projectGrid");

projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card fadein";

    card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="buttons">
            <a href="${p.github}" target="_blank" class="btn github">GitHub</a>
            <a href="${p.demo}" target="_blank" class="btn demo">Live Demo</a>
        </div>
    `;

    container.appendChild(card);
});
