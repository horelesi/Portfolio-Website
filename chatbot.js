// Simple rule-based FAQ chatbot about Tolulope

const botFAQ = [
  {
    patterns: ["name", "who are you", "who is this"],
    answer:
      "I’m Tolulope Orelesi, a Network Security Engineer focused on firewalls, VPNs, and cloud/network security."
  },
  {
    patterns: ["skills", "tech stack", "what can you do", "tools"],
    answer:
      "My core skills include Palo Alto NGFW, GlobalProtect VPN, TCP/IP, BGP, OSPF, VLAN, NAT, AWS networking (Security Groups / NACLs), Wireshark, and packet analysis."
  },
  {
    patterns: ["experience", "background", "work history", "what experience"],
    answer:
      "I have hands-on experience securing networks with next-generation firewalls, VPNs, VLAN-based segmentation, and AWS cloud environments. I’ve worked on projects like GlobalProtect deployments, SSL decryption, and network segmentation."
  },
  {
    patterns: ["project", "projects", "portfolio", "what have you built"],
    answer:
      "You can check the Projects section for my Campus Helper Chatbot, this Portfolio Website, and my Network Security Lab concept. Each card links to GitHub and live demos where available."
  },
  {
    patterns: ["certification", "certifications", "cert", "security+"],
    answer: "I hold the CompTIA Security+ certification."
  },
  {
    patterns: ["education", "school", "degree", "university", "college"],
    answer:
      "I have a background in computer and information technology, with focus areas in networking and security."
  },
  {
    patterns: ["availability", "job", "hire", "open to work", "role"],
    answer:
      "I’m open to discussing full-time roles and opportunities related to network and security engineering. Feel free to reach out via the Contact section or email."
  },
  {
    patterns: ["contact", "email", "reach you", "how can i contact"],
    answer: "You can contact me directly at Orelesitolulope@gmail.com or use the form in the Contact section."
  }
];

function normalizeText(text) {
  return text.trim().toLowerCase();
}

function getBotReply(userText) {
  const text = normalizeText(userText);

  for (const item of botFAQ) {
    for (const pattern of item.patterns) {
      if (text.includes(pattern)) {
        return item.answer;
      }
    }
  }

  return (
    "I can answer questions about my skills, experience, projects, education, and availability. " +
    "Try asking something like: “What are your skills?” or “Tell me about your projects.”"
  );
}
