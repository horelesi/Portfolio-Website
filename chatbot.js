// Very simple FAQ-based chatbot for the portfolio
function getBotReply(text) {
  const q = text.toLowerCase();

  if (q.includes("name") || q.includes("who are you")) {
    return "My name is Tolulope Orelesi. I’m a Network Security Engineer.";
  }

  if (q.includes("skill") || q.includes("expertise") || q.includes("what do you do")) {
    return "I work with next-generation firewalls (Palo Alto), GlobalProtect VPN, VLANs, AWS security, and packet analysis with Wireshark.";
  }

  if (q.includes("experience") || q.includes("work") || q.includes("job")) {
    return "I currently support WMATA as a Network Security Engineer and previously assisted with security projects at S & C Consulting.";
  }

  if (q.includes("cert") || q.includes("security+")) {
    return "I hold the CompTIA Security+ certification.";
  }

  if (q.includes("education") || q.includes("school") || q.includes("degree")) {
    return "I earned a B.Sc. in Computer Technology from Bowie State University and an A.S. in Information Technology from Prince George’s Community College.";
  }

  if (q.includes("project") || q.includes("github")) {
    return "You can see my Campus Helper Chatbot, this portfolio site, and my network security lab concept in the Projects section. Each card links to GitHub and any live demos.";
  }

  if (q.includes("contact") || q.includes("email")) {
    return "You can contact me through the Contact form or email me at Orelesitolulope@gmail.com.";
  }

  return "I can answer questions about my skills, projects, certifications, education, and how to contact me. Try asking, for example: 'What are your skills?'";
}

