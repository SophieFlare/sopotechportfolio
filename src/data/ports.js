// sql.js
// =========================
// DATABASE STYLE PORT DATA
// =========================

export const physicalPorts = [
  ["USB", "Keyboard, mouse, storage, charging"],
  ["Ethernet (RJ-45)", "Wired internet (LAN)"],
  ["HDMI", "Video + audio output"],
  ["VGA / DVI / DisplayPort", "Video output to display"],
  ["Audio Port", "Headphones, mic, speakers"],
  ["PS/2", "Old keyboard and mouse"]
];

export const networkPorts = [
  ["Internal", "Used inside LAN"],
  ["External", "Accessible from internet via router/firewall"]
];

export const logicalPorts = [
  ["Well-known", "0-1023", "HTTP, SSH, FTP"],
  ["Registered", "1024-49151", "MySQL, SQL Server"],
  ["Dynamic", "49152-65535", "Temporary connections"]
];

export const oldPorts = [
  ["Serial", "1 bit at a time (COM, RS-232)"],
  ["Parallel", "Multiple bits at once (LPT printers)"]
];

export const virtualPorts = [
  ["Network Virtual Ports", "VMware, Docker, Cloud systems"],
  ["Application Ports", "80 HTTP, 443 HTTPS, 3306 MySQL"]
];

export const sqlTables = {
  physicalPorts,
  networkPorts,
  logicalPorts,
  oldPorts,
  virtualPorts
};
