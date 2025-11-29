// Simple FAQ chatbot logic for Tolulope's portfolio
function getBotReply(text) {
  const q = text.toLowerCase();

  if (q.includes("name") || q.includes("who are you")) {
    return "My name is Tolulope Orelesi, and I am a Network Security Engineer.";
  }

  if (q.includes("skills") || q.includes("skill") || q.includes("stack") || q.includes("tools")) {
    return "My core skills include Palo Alto NGFW, GlobalProtect VPN, IPsec/SSL VPN, AWS security (Security Groups/NACLs), and routing protocols like BGP and OSPF.";
  }

  if (q.includes("experience") || q.includes("background") || q.includes("work")) {
    return "I have experience configuring next-generation firewalls, implementing VPN solutions, designing network segmentation with VLANs, and securing cloud environments in AWS.";
  }

  if (q.includes("certification") || q.includes("certified") || q.includes("compTIA") || q.includes("security+")) {
    return "I hold the CompTIA Security+ certification.";
  }

  if (q.includes("education") || q.includes("degree") || q.includes("school") || q.includes("university") || q.includes("college")) {
    return "I earned a B.Sc. in Computer Technology from Bowie State University and an A.S. in Information Technology from Prince George’s Community College.";
  }

  if (q.includes("project") || q.includes("projects") || q.includes("portfolio")) {
    return "You can see my projects in the Projects section, including my Campus Helper Chatbot and this Portfolio Website.";
  }

  if (q.includes("available") || q.includes("availability") || q.includes("hire") || q.includes("job") || q.includes("role") || q.includes("position")) {
    return "I am open to roles and opportunities related to network security and infrastructure. Please use the contact form or email me at Orelesitolulope@gmail.com.";
  }

  if (q.includes("contact") || q.includes("email")) {
    return "You can contact me using the Contact form or by emailing me directly at Orelesitolulope@gmail.com.";
  }

  return "I can answer questions about my skills, experience, projects, and background. Try asking: 'What are your skills?' or 'What projects have you worked on?'";
}
