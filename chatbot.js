// Simple FAQ-style portfolio bot
const BOT_FAQ = [
  {
    match: /name|who are you/i,
    answer: "I’m Tolulope Orelesi, a Network Security Engineer focused on next-generation firewalls, VPNs, and cloud security."
  },
  {
    match: /skill|tools|stack/i,
    answer:
      "My main skills include Palo Alto NGFWs, GlobalProtect VPN, AWS security (security groups, NACLs), Wireshark, VLANs, NAT, and routing protocols like BGP and OSPF."
  },
  {
    match: /experience|background|work/i,
    answer:
      "I’ve worked on projects such as GlobalProtect VPN rollout, SSL decryption on enterprise firewalls, and network segmentation using VLANs."
  },
  {
    match: /project|portfolio|github/i,
    answer:
      "You can see my key projects in the Projects section: Campus Helper Chatbot, this Portfolio Website, and a Network Security Lab concept. Each card links to GitHub and live demos where available."
  },
  {
    match: /education|school|degree|college|university/i,
    answer:
      "I’m earning a B.Sc. in Computer Technology from Bowie State University and I also hold an A.S. in Information Technology from Prince George’s Community College."
  },
  {
    match: /certification|certificate|certified|security\+/i,
    answer: "I’m CompTIA Security+ certified, which covers core security principles and best practices."
  },
  {
    match: /availability|hire|job|role|opportunit/i,
    answer:
      "I’m open to roles and opportunities in network security and cloud security. You can use the contact form on this site or email me at Orelesitolulope@gmail.com."
  },
  {
    match: /contact|email|reach/i,
    answer: "The easiest way to contact me is via the Contact section on this site or by emailing Orelesitolulope@gmail.com."
  }
];

function getBotReply(text) {
  for (const item of BOT_FAQ) {
    if (item.match.test(text)) {
      return item.answer;
    }
  }
  return "I can answer questions about my skills, projects, experience, education, and availability. Try asking: “What are your skills?” or “Tell me about your projects.”";
}
