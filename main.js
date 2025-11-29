// Load Projects
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");

    projects.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("project-card", "fade-in");

        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.description}</p>
        `;
        container.appendChild(card);
    });
});

// Chatbot Actions
const chatBtn = document.getElementById("chatbot-btn");
const chatBox = document.getElementById("chatbot-box");
const closeChat = document.getElementById("close-chat");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

chatBtn.addEventListener("click", () => chatBox.classList.toggle("hidden"));
closeChat.addEventListener("click", () => chatBox.classList.add("hidden"));

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const msg = chatInput.value;
    chatMessages.innerHTML += `<div class="message user">${msg}</div>`;
    chatMessages.innerHTML += `<div class="message bot">${getAnswer(msg)}</div>`;
    chatInput.value = "";

    chatMessages.scrollTop = chatMessages.scrollHeight;
});
