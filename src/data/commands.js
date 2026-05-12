export const runSystemCommand = (cmd) => {
  const args = cmd.trim().toLowerCase().split(" ");

  const ip = () =>
    `10.${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}.${Math.floor(Math.random() * 255)}`;

  switch (args[0]) {

    // ================= CORE =================
    case "help":
      return [
        "AVAILABLE COMMANDS:",
        "help",
        "clear",
        "ping <ip>",
        "netstat",
        "ipconfig",
        "netsh",
        "whoami",
        "systeminfo",
        "scan",
        "trace",
        "cls"
      ];

    case "clear":
    case "cls":
      return "CLEAR";

    // ================= NETWORK =================
    case "ping":
      return [
        `PING ${args[1] || "127.0.0.1"} ...`,
        "Reply from 10.0.0.1: bytes=32 time=12ms TTL=64",
        "Reply from 10.0.0.1: bytes=32 time=11ms TTL=64",
        "Reply from 10.0.0.1: bytes=32 time=13ms TTL=64",
        "Status: OK"
      ];

    case "netstat":
      return [
        "Active Connections:",
        "TCP  127.0.0.1:443   ESTABLISHED",
        "TCP  192.168.0.5:22  LISTENING",
        "TCP  10.0.0.2:80     ESTABLISHED",
        `TCP  ${ip()}:443     ESTABLISHED`
      ];

    case "ipconfig":
      return [
        "Ethernet Adapter:",
        `IPv4 Address: ${ip()}`,
        "Subnet Mask: 255.255.255.0",
        "Gateway: 192.168.0.1"
      ];

    case "netsh":
      return [
        "Network Shell Active",
        "Firewall: ENABLED",
        "DNS: 1.1.1.1",
        "Proxy: DISABLED",
        "NAT: ACTIVE"
      ];

    // ================= SYSTEM =================
    case "whoami":
      return [
        "USER: root@cyber-node",
        "ROLE: SYSTEM ADMIN",
        "ACCESS LEVEL: MAXIMUM",
        "SESSION: ACTIVE"
      ];

    case "systeminfo":
      return [
        "SYSTEM INFORMATION:",
        "OS: CYBER-CORE LINUX (SIMULATED)",
        "CPU: Neural Processing Unit v9",
        "RAM: 32GB Quantum Cache",
        "STATUS: STABLE",
        "UPTIME: 03:42:19"
      ];

    // ================= HACKER MODE =================
    case "scan":
      return [
        `Scanning network...`,
        `Target nodes found: ${Math.floor(Math.random() * 20) + 3}`,
        "Analyzing ports...",
        "Open ports detected: 22, 80, 443, 3000",
        "Threat level: LOW"
      ];

    case "trace":
      return [
        `Tracing route to ${args[1] || "target.node"}`,
        "1  192.168.0.1   1ms",
        "2  10.0.0.1      3ms",
        "3  172.16.0.1    7ms",
        "4  destination reached"
      ];

    // ================= DEFAULT =================
    default:
      return `ERROR: Command not found -> ${cmd}`;
  }
};