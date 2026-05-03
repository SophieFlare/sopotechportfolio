export const commands = {
  help: `
AVAILABLE SYSTEM COMMANDS:

BASIC:
- ipconfig
- whoami
- hostname
- systeminfo

NETWORK:
- tracert google.com
- netstat
- nettcpconnection
- ping 8.8.8.8

PROCESS / SYSTEM:
- get-process
- cpu
- get-services
- tasklist

SECURITY:
- get-firewall
- get-users
- check-port 443

UTILITY:
- clear
`,

  ipconfig: `
Ethernet adapter:

IPv4 Address     : 192.168.1.105
Subnet Mask      : 255.255.255.0
Default Gateway  : 192.168.1.1
DNS Servers      : 8.8.8.8, 1.1.1.1
`,

  whoami: `
USER INFORMATION
----------------
Username   : user
Domain     : LOCALHOST
Privilege  : ADMIN (simulated)
Session ID : 1
`,

  hostname: `
DESKTOP-USER-01
`,

  systeminfo: `
SYSTEM INFORMATION
------------------
OS Name       : Custom OS Simulation
Version       : 10.0.19045
System Type   : x64-based PC
Memory        : 16GB
Processor     : Intel i7 (simulated)
`,

  "tracert google.com": `
Tracing route to google.com...

1  192.168.1.1        (local router)
2  10.10.0.1          (isp gateway)
3  100.64.0.1         (carrier NAT)
4  core-backbone.net
5  google-dc.edge
6  google.com
`,

  ping: `
PING 8.8.8.8

Reply from 8.8.8.8: time=12ms
Reply from 8.8.8.8: time=11ms
Reply from 8.8.8.8: time=13ms

Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)
`,

  "get-process": `
PROCESS LIST
------------

chrome.exe        CPU: 12%   MEM: 420MB
node.exe          CPU: 8%    MEM: 210MB
code.exe          CPU: 15%   MEM: 800MB
explorer.exe      CPU: 3%    MEM: 120MB
system            CPU: 5%    MEM: 500MB
`,

  netstat: `
ACTIVE CONNECTIONS

TCP 192.168.1.105:443   ESTABLISHED
TCP 192.168.1.105:80    LISTENING
TCP 10.0.0.5:22         ESTABLISHED
TCP 192.168.1.105:5353  CLOSE_WAIT
`,

  nettcpconnection: `
TCP CONNECTION TABLE

Local Address         Remote Address        State
192.168.1.105:443     142.250.74.14:443    ESTABLISHED
192.168.1.105:22      10.0.0.1:51234       TIME_WAIT
192.168.1.105:80      93.184.216.34:80     CLOSE_WAIT
`,

  cpu: `
CPU PERFORMANCE

Usage        : 32%
Processes    : 124
Threads      : 1840
Uptime       : 3d 4h 22m
Status       : STABLE
`,

  "get-services": `
SERVICES

Running:
- DHCP Client
- DNS Resolver
- Windows Update
- Firewall Service

Stopped:
- Telnet (disabled)
- FTP Service
`,

  "get-firewall": `
FIREWALL STATUS

Inbound Rules  : ACTIVE
Outbound Rules : ACTIVE
Blocked Ports  : 23, 445, 3389
Mode           : STRICT
`,

  "get-users": `
USER ACCOUNTS

- admin (ADMIN)
- user (STANDARD)
- guest (DISABLED)
`,

  "check-port 443": `
PORT SCAN RESULT

Port 443: OPEN (HTTPS)
Service : Secure Web Traffic
Risk    : LOW
`,
};