const icon = document.getElementById("chatbot-icon");
const box = document.getElementById("chatbot-box");
const body = document.getElementById("chat-body");
const input = document.getElementById("chat-input");

icon.addEventListener("click", () => {
    box.style.display = box.style.display === "flex" ? "none" : "flex";
});

input.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        let user = input.value;
        addMessage("You: " + user);
        botReply(user);
        input.value = "";
    }
});

function addMessage(msg){
    let p = document.createElement("p");
    p.textContent = msg;
    body.appendChild(p);
    body.scrollTop = body.scrollHeight;
}

function botReply(text){
    let reply = "";

    text = text.toLowerCase();

    if (text.includes("hello") || text.includes("hi")){
        reply = "Hello! How can I help you today?";
    }
    else if (text.includes("skills")){
        reply = "I am skilled in Network Security, Firewalls (Palo Alto, ASA), VPNs, Wireshark, and Cloud Security.";
    }
    else if (text.includes("projects")){
        reply = "You can view all my projects in the Projects section.";
    }
    else {
        reply = "I'm not sure about that, but I can tell you about my skills, projects, or experience!";
    }

    addMessage("Bot: " + reply);
}

