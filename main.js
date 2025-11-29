// ---------- Reveal animations on scroll ----------
const sections = document.querySelectorAll(".fade, .slide-up, .slide-left, .slide-right");

function reveal() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            sec.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// ---------- Smooth Scrolling ----------
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// ---------- Mobile Menu Toggle ----------
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

// ---------- Chatbot Floating Button ----------
const botBtn = document.getElementById("chatbot-btn");
const botWindow = document.getElementById("chatbot-box");
const botClose = document.getElementById("chatbot-close");

if (botBtn) {
    botBtn.addEventListener("click", () => {
        botWindow.classList.add("open");
    });
}
if (botClose) {
    botClose.addEventListener("click", () => {
        botWindow.classList.remove("open");
    });
}

// ---------- Simple Built-in Portfolio Chatbot ----------
const botMessages = document.getElementById("bot-messages");
const botSend = document.getElementById("bot-send");
const botInput = document.getElementById("bot-input");

function botReply(text) {
    const msg = document.createElement("div");
    msg.className = "bot-msg";
    msg.innerText = text;
    botMessages.appendChild(msg);
    botMessages.scrollTop = botMessages.scrollHeight;
}

if (botSend) {
    botSend.addEventListener("click", () => {
        const userText = botInput.value.trim();
        if (!userText) return;

        const userMsg = document.createElement("div");
        userMsg.className = "user-msg";
        userMsg.innerText = userText;
        botMessages.appendChild(userMsg);

        botInput.value = "";

        // Replies
        let reply = "I'm here to help!";

        if (/hello|hi|hey/i.test(userText)) reply = "Hello! How can I assist you today?";
        else if (/skills/i.test(userText)) reply = "My key skills include Palo Alto firewalls, VPNs, Wireshark, SIEM, threat analysis, and network troubleshooting.";
        else if (/experience|work/i.test(userText)) reply = "I have hands-on experience working with Next-Gen Firewalls, VPNs, network monitoring, and security tools.";
        else if (/projects?/i.test(userText)) reply = "You can view my full projects on the Projects page!";
        else if (/resume/i.test(userText)) reply = "You can download my resume on the Resume page.";
        else if (/contact/i.test(userText)) reply = "You can reach me anytime at Orelseitolu@gmail.com.";
        else reply = "I'm not sure about that yet, but I'm learning more every day!";

        setTimeout(() => botReply(reply), 500);
    });
}

// ---------- Theme Animation Fade-in ----------
document.body.classList.add("page-loaded");
