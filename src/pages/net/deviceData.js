const devicesData = [
  {
    key: "hub",
    name: "📡 Hub",
    label: "Layer 1 Device",
    desc: "A hub is a basic networking device that operates at the Physical Layer of the OSI model.",
    learn:
      "It simply broadcasts incoming signals to all connected devices without any filtering or intelligence. This makes it inefficient and mostly obsolete in modern networks.",
    extra:
      "No MAC awareness • No traffic control • Causes collisions",
    img: "/net/hub.jpg",
  },
  {
    key: "router",
    name: "🔥 Router",
    label: "Layer 3 Device",
    desc: "A router connects multiple networks and directs traffic between them.",
    learn:
      "It uses IP addresses to determine the best path for data packets, enabling communication between LAN and WAN (like the internet).",
    extra:
      "Performs NAT • Handles routing tables • Connects to ISP",
    img: "/net/routerr.png",
  },
  {
    key: "gateway",
    name: "🌐 Gateway",
    label: "Protocol Translator",
    desc: "A gateway acts as an entry/exit point between different networks.",
    learn:
      "It can translate between different protocols, allowing systems with different architectures to communicate.",
    extra:
      "Used in enterprise networks • Protocol conversion",
    img: "/net/gateway.gif",
  },
  {
    key: "nic",
    name: "📶 NIC",
    label: "Hardware Interface",
    desc: "Network Interface Card allows devices to connect to a network.",
    learn:
      "Each NIC has a unique MAC address and enables communication via Ethernet or WiFi.",
    extra:
      "MAC Address = physical identity",
    img: "/net/nic_98.jpg",
  },
  {
    key: "modem",
    name: "📡 Modem",
    label: "Signal Converter",
    desc: "A modem converts digital signals to analog and vice versa.",
    learn:
      "It allows your network to communicate with your ISP over infrastructure like DSL, fiber, or cable.",
    extra:
      "Modulation / Demodulation",
    img: "/net/modem.jpg",
  },
  {
    key: "repeater",
    name: "📡 Repeater",
    label: "Layer 1 Device",
    desc: "A repeater regenerates weak signals.",
    learn:
      "It boosts and retransmits signals to extend network range without modifying data.",
    extra:
      "No intelligence • Just signal boost",
    img: "/net/repeaterr.jpg",
  },
  {
    key: "wap",
    name: "📶 WAP",
    label: "Wireless Access Point",
    desc: "A WAP provides wireless connectivity to a network.",
    learn:
      "It allows devices to connect via WiFi and bridges wireless traffic into a wired network.",
    extra:
      "Used in offices, homes, public WiFi",
    img: "/net/wap.jpg",
  },
  {
    key: "firewall",
    name: "🛡️ Firewall",
    label: "Security Layer",
    desc: "A firewall filters network traffic based on rules.",
    learn:
      "It protects systems by blocking unauthorized access and allowing legitimate communication.",
    extra:
      "Can be hardware or software",
    img: "/net/firewall.jpg",
  },
  {
    key: "idps",
    name: "🔍 IDPS",
    label: "Security Monitoring",
    desc: "Intrusion Detection & Prevention System monitors traffic.",
    learn:
      "It detects suspicious activity and can actively block threats in real time.",
    extra:
      "Used in cybersecurity environments",
    img: "/net/idps.jpg",
  },
  {
    key: "vpn",
    name: "🔐 VPN",
    label: "Encryption Tunnel",
    desc: "A VPN creates a secure connection over the internet.",
    learn:
      "It encrypts your traffic and hides your IP, allowing private and secure communication.",
    extra:
      "Used for privacy & remote access",
    img: "/net/vpn.png",
  },
];

export default devicesData;