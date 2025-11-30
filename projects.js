const projects = [
    {
        title: "Campus Helper Chatbot",
        description: "IBM Watson Assistant chatbot hosted on GitHub Pages to help students with campus information.",
        github: "https://github.com/horelesi/Campus-Helper-Chatbot",
        demo: "https://horelesi.github.io/Campus-Helper-Chatbot/"
    },
    {
        title: "Portfolio Website",
        description: "Responsive portfolio built with HTML, CSS, and JavaScript including animations, chatbot, and QR code.",
        github: "https://github.com/horelesi/Portfolio-Website",
        demo: "https://horelesi.github.io/Portfolio-Website/"
    },
    {
        title: "Network Security Lab (Concept)",
        description: "Hands-on network lab focusing on VPNs, firewalls, routing, and inspection tools like Palo Alto and Wireshark.",
        github: "https://github.com/horelesi",
        demo: ""
    }
];

function loadProjects() {
    const projectContainer = document.getElementById("project-list");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card", "fade");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a class="btn github" href="${project.github}" target="_blank">GitHub</a>
            ${project.demo ? `<a class="btn demo" href="${project.demo}" target="_blank">Live Demo</a>` : ""}
        `;

        projectContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);
