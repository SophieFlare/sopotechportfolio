export function runCommand(cmd, setHistory) {
  const args = cmd.trim().split(" ");
  const base = args[0].toLowerCase();
  const param = args.slice(1).join(" ");

  let output = "";

  switch (base) {
    case "help":
      output =
        "Commands:\n" +
        "ipconfig\nping [host]\ntracert [host]\nnslookup [domain]\nnetstat\nwhoami\ntasklist\nsysteminfo\nclear";
      break;

    case "whoami":
      output = "user: IT_SUPPORT_OPERATOR";
      break;

    case "ipconfig":
      output =
        "IPv4 Address: 192.168.1.24\n" +
        "Subnet Mask: 255.255.255.0\n" +
        "Default Gateway: 192.168.1.1";
      break;

    case "ping":
      if (!param) {
        output = "Usage: ping [host]";
      } else {
        const ms = Math.floor(Math.random() * 40 + 10);
        output =
          `Pinging ${param}...\n` +
          `Reply: time=${ms}ms\nReply: time=${ms + 3}ms`;
      }
      break;

    case "tracert":
      if (!param) {
        output = "Usage: tracert [host]";
      } else {
        output =
          `Tracing route to ${param}\n` +
          "1 192.168.1.1\n2 ISP_NODE\n3 CORE_NETWORK\n4 DESTINATION";
      }
      break;

    case "nslookup":
      if (!param) {
        output = "Usage: nslookup [domain]";
      } else {
        output =
          `Server: 8.8.8.8\nName: ${param}\nAddress: 142.250.74.14`;
      }
      break;

    case "netstat":
      output =
        "Active Connections:\n" +
        "TCP 192.168.1.24:49721 → 142.250.74.14:443 ESTABLISHED\n" +
        "TCP 192.168.1.24:49722 → 172.217.16.78:80 TIME_WAIT";
      break;

    case "tasklist":
      output =
        "chrome.exe\nexplorer.exe\ncmd.exe\nnode.exe\nsystem";
      break;

    case "systeminfo":
      output =
        "OS: Windows 11\nCPU: Intel i5\nRAM: 16GB\nSystem Type: x64";
      break;

    case "clear":
      setHistory([]);
      return;

    default:
      output = `Command not found: ${cmd}`;
  }

  setHistory((prev) => [...prev, `> ${cmd}`, output]);
}