document.addEventListener("DOMContentLoaded", function() {
  // Load projects into the Projects section
  const projectsList = document.getElementById("projects-list");
  if (projectsList && typeof projectsData !== "undefined") {
    projectsData.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "project";
      const titleEl = document.createElement("h3");
      titleEl.textContent = project.title;
      const descEl = document.createElement("p");
      descEl.textContent = project.description;
      projectDiv.appendChild(titleEl);
      projectDiv.appendChild(descEl);
      projectsList.appendChild(projectDiv);
    });
  }

  // Chatbot functionality
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatContainer = document.getElementById("chat-container");

  if (chatForm && chatInput && chatContainer) {
    chatForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const question = chatInput.value.trim();
      if (question === "") return;
      // Append user message to chat container
      const userMsg = document.createElement("div");
      userMsg.className = "message user";
      userMsg.textContent = question;
      chatContainer.appendChild(userMsg);
      // Get answer from the chatbot logic
      const answer = getAnswer(question);
      const botMsg = document.createElement("div");
      botMsg.className = "message bot";
      botMsg.textContent = answer;
      chatContainer.appendChild(botMsg);
      // Scroll to the bottom of chat container for new messages
      chatContainer.scrollTop = chatContainer.scrollHeight;
      // Clear the input field for the next question
      chatInput.value = "";
    });
  }
});
