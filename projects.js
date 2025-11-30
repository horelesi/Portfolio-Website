const projects = [
    {
        title: "Campus Helper Chatbot",
        desc: "IBM Watson Assistant chatbot that helps students with campus information.",
        github: "https://github.com/horelesi",
        demo: "https://horelesi.github.io/Chatbot-website/"
    },
    {
        title: "Portfolio Website",
        desc: "Responsive portfolio built with HTML, CSS, and JavaScript including chatbot + QR code.",
        github: "https://github.com/horelesi/Portfolio-Website",
        demo: "https://horelesi.github.io/Portfolio-Website/"
    },
    {
        title: "Network Security Lab (Concept)",
        desc: "Hands-on lab focusing on VPNs, firewall rules, and packet inspection.",
        github: "https://github.com/horelesi"
    }
];

const container = document.getElementById("project-list");

projects.forEach(p => {
    container.innerHTML += `
        <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <a class="btn-blue" href="${p.github}" target="_blank">GitHub</a>
            ${p.demo ? `<a class="btn-black" href="${p.demo}" target="_blank">Live Demo</a>` : ""}
        </div>
    `;
});
