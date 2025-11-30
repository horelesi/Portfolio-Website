document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const showing = navLinks.style.display === "flex";
      navLinks.style.display = showing ? "none" : "flex";
    });
  }

  // Render projects
  if (typeof renderProjects === "function") {
    renderProjects();
  }

  // Generate QR code image using current URL (no qr.png needed)
  const qrImg = document.getElementById("qrImage");
  if (qrImg) {
    const url = window.location.href.split("#")[0]; // clean URL
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=" +
      encodeURIComponent(url);
  }

  // Chatbot UI
  const chatFab = document.getElementById("chatToggle");
  const chatPanel = document.getElementById("chatPanel");
  const chatClose = document.getElementById("chatClose");
  const chatBody = document.getElementById("chatBody");
  const chatForm = document.getElementById("chatForm");
  const chatText = document.getElementById("chatText");

  function addMessage(who, text) {
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  if (chatFab && chatPanel && chatBody && chatForm && chatText) {
    chatFab.addEventListener("click", () => {
      chatPanel.style.display = "flex";
      chatPanel.setAttribute("aria-hidden", "false");
      if (!chatBody.dataset.welcomed) {
        addMessage(
          "bot",
          "Hi, I’m your portfolio bot. Ask me about Tolulope’s skills, projects, education, or certifications!"
        );
        chatBody.dataset.welcomed = "1";
      }
    });

    if (chatClose) {
      chatClose.addEventListener("click", () => {
        chatPanel.style.display = "none";
        chatPanel.setAttribute("aria-hidden", "true");
      });
    }

    chatForm.addEventListener("submit", e => {
      e.preventDefault();
      const text = chatText.value.trim();
      if (!text) return;
      addMessage("user", text);
      chatText.value = "";
      const reply =
        typeof getBotReply === "function"
          ? getBotReply(text)
          : "Sorry, I’m not configured yet.";
      addMessage("bot", reply);
    });
  }

  // Scroll reveal animations
  const fades = document.querySelectorAll(".fade");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fades.forEach(sec => observer.observe(sec));
  } else {
    // Fallback: simple on-load reveal
    fades.forEach(sec => sec.classList.add("visible"));
  }
});

