function getAnswer(question) {
  const q = question.toLowerCase();
  if (q.includes("name") || q.includes("who are")) {
    return "My name is Tolulope Orelesi, and I am a Network Security Engineer.";
  } else if (q.includes("current") || q.includes("work") || q.includes("job") || q.includes("experience")) {
    return "I have been working in network security since 2021. I am currently a Network Security Engineer at WMATA, and I previously worked at S & C Consulting."; //:contentReference[oaicite:12]{index=12}:contentReference[oaicite:13]{index=13}
  } else if (q.includes("skill") || q.includes("expertise")) {
    return "My key skills include configuring VPNs (GlobalProtect, IPsec, SSL VPN), AWS cloud security (Security Groups and NACLs), and network protocols like TCP/IP, BGP, OSPF, VLAN, and NAT."; //:contentReference[oaicite:14]{index=14}
  } else if (q.includes("cert")) {
    return "I am CompTIA Security+ certified."; //:contentReference[oaicite:15]{index=15}
  } else if (q.includes("educat") || q.includes("degree") || q.includes("university") || q.includes("college")) {
    return "I earned a B.Sc. in Computer Technology from Bowie State University in 2025, and an A.S. in Information Technology from Prince George’s Community College in 2020."; //:contentReference[oaicite:16]{index=16}
  } else if (q.includes("project") || q.includes("accomplishment") || q.includes("achieve")) {
    return "My key projects include implementing a GlobalProtect VPN for remote access, deploying network segmentation via VLANs, and enabling SSL decryption on enterprise firewalls."; //:contentReference[oaicite:17]{index=17}
  } else if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    return "You can reach me via email at Orelesitolulope@gmail.com.";
  } else {
    return "I'm here to answer questions about my background, experience, skills, and more. Feel free to ask me about my work or qualifications!";
  }
}
