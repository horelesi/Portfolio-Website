document.addEventListener("DOMContentLoaded", () => {
  // YEAR IN FOOTER
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // MOBILE NAV TOGGLE
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // SCROLL REVEAL ANIMATION
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));

  // CHATBOT WIRING
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  function addBubble(text, who) {
    if (!chatMessages) return;
    const div = document.createElement("div");
    div.className = `chat-bubble ${who}`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Initial bot greeting
  if (chatMessages) {
    addBubble("Hi, I’m Tolulope’s Portfolio Bot. Ask me about his skills, projects, or experience.", "bot");
  }

  if (chatForm && chatInput && chatMessages) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      addBubble(text, "user");
      const reply = getBotReply(text);
      addBubble(reply, "bot");
      chatInput.value = "";
      chatInput.focus();
    });
  }
});
