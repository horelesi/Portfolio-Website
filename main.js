// MAIN INTERACTIONS

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.style.display === "flex";
      navLinks.style.display = isOpen ? "none" : "flex";
    });
  }

  // QR Code
  const qrContainer = document.getElementById("qrcode");
  if (qrContainer && typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
      text: window.location.href,
      width: 140,
      height: 140
    });
  }

  // Chatbot UI
  const chatFab = document.getElementById("chatToggle");
  const chatPanel = document.getElementById("chatPanel");
  const chatClose = document.getElementById("chatClose");
  const chatBody = document.getElementById("chatBody");
  const chatForm = document.getElementById("chatForm");
  const chatText = document.getElementById("chatText");

  function addMessage(who, text) {
    if (!chatBody) return;
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function openChat() {
    if (!chatPanel) return;
    chatPanel.style.display = "flex";
    chatPanel.setAttribute("aria-hidden", "false");
    if (chatBody && chatBody.childElementCount === 0) {
      addMessage(
        "bot",
        "Hi! I’m your Portfolio Bot. Ask me about my skills, projects, or experience."
      );
    }
  }

  function closeChat() {
    if (!chatPanel) return;
    chatPanel.style.display = "none";
    chatPanel.setAttribute("aria-hidden", "true");
  }

  if (chatFab) {
    chatFab.addEventListener("click", openChat);
  }

  if (chatClose) {
    chatClose.addEventListener("click", closeChat);
  }

  if (chatForm && chatText) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = chatText.value.trim();
      if (!text) return;
      addMessage("user", text);
      chatText.value = "";
      try {
        const reply = getBotReply(text);
        addMessage("bot", reply);
      } catch (err) {
        addMessage("bot", "Oops, something went wrong. Please try again.");
      }
    });
  }
});
