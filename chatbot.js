function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("name") || text.includes("who are you")) {
    return "I’m Tolulope’s Portfolio Bot. I can tell you about his skills, projects, and background.";
  }

  if (text.includes("skill") || text.includes("tools") || text.includes("stack")) {
    return "Tolulope’s key skills include next-gen firewalls (Palo Alto), GlobalProtect VPN, AWS security, VLANs, NAT, BGP/OSPF, and Wireshark analysis.";
  }

  if (text.includes("experience") || text.includes("background") || text.includes("job")) {
    return "He works as a Network Security Engineer, focusing on firewall configuration, VPNs, and securing cloud/on-prem networks.";
  }

  if (text.includes("project")) {
    return "You can see example projects like the Campus Helper Chatbot, this Portfolio Website, and a Network Security Lab concept in the Projects section.";
  }

  if (text.includes("education") || text.includes("school") || text.includes("degree")) {
    return "Tolulope holds a B.Sc. in Computer Technology and an A.S. in Information Technology, and he is CompTIA Security+ certified.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("reach")) {
    return "You can contact him at Orelesitolulope@gmail.com or use the email button in the Contact section.";
  }

  if (text.includes("available") || text.includes("hire") || text.includes("opportunit")) {
    return "He is open to discussing roles and opportunities in network security and related areas.";
  }

  return "I can answer questions about his skills, projects, experience, education, and how to contact him. Try asking: “What are your skills?”";
}

