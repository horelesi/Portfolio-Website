function getAnswer(q) {
    q = q.toLowerCase();

    if (q.includes("name") || q.includes("who")) 
        return "I am Tolulope Orelesi, a Network Security Engineer specializing in firewalls, VPN, and cloud security.";

    if (q.includes("skill") || q.includes("expert"))
        return "My core skills include Palo Alto NGFW, GlobalProtect VPN, VLAN segmentation, SSL decryption, BGP, OSPF, AWS security.";

    if (q.includes("job") || q.includes("experience"))
        return "I have hands-on experience in firewall configuration, VPN deployment, SSL decryption, AWS cloud security, and enterprise network protection.";

    if (q.includes("education"))
        return "I hold a B.Sc. in Computer Technology from Bowie State University and an A.S. in Information Technology from PGCC.";

    if (q.includes("cert"))
        return "I am CompTIA Security+ certified.";

    return "I can tell you about Tolulope’s skills, experience, education, and certifications. Ask me anything!";
}

