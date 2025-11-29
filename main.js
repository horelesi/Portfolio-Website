// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isVisible = navLinks.style.display === "flex";
      navLinks.style.display = isVisible ? "none" : "flex";
    });
  }

  // Render projects
  if (typeof renderProjects === "function") {
    renderProjects();
  }

  // QR code for current page URL
  const qrContainer = document.getElementById("qrcode");
  if (qrContainer && typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
      text: window.location.href,
      width: 140,
      height: 140
    });
  }

  // Reveal animation on scroll
  const reveals = document.querySelectorAll(".reveal");
  const onScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", onScroll);
  onScroll(); // trigger once

  // Chatbot UI
  const chatFab = document.getElementById("chatToggle");
  const chatPanel = document.getElementById("chatPanel");
  const chatClose = document.getElementById("chatClose");
  const chatBody = document.getElementById("chatBody");
  const chatForm = document.getElementById("chatForm");
  const chatText = document.getElementById("chatText");

  function addMsg(who, text) {
    if (!chatBody) return;
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  if (chatFab && chatPanel) {
    chatFab.addEventListener("click", () => {
      chatPanel.style.display = "flex";
      chatPanel.setAttribute("aria-hidden", "false");
      if (chatBody && chatBody.childElementCount === 0) {
        addMsg("bot", "Hi! I’m your Portfolio Bot. Ask about my skills, projects, or availability.");
      }
    });
  }

  if (chatClose && chatPanel) {
    chatClose.addEventListener("click", () => {
      chatPanel.style.display = "none";
      chatPanel.setAttribute("aria-hidden", "true");
    });
  }

  if (chatForm && chatText) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = chatText.value.trim();
      if (!text) return;
      addMsg("user", text);
      chatText.value = "";
      try {
        const reply = getBotReply(text);
        addMsg("bot", reply);
      } catch (err) {
        addMsg("bot", "Oops, something went wrong. Please try again.");
      }
    });
  }
});
