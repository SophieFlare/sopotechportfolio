export const levels = [
  {
    lvl: "LVL 1/2",
    nodes: [
      {
        id: "boot",
        name: "BOOT:0",
        msg: "System initialization sequence / kernel handshake",
      },
      {
        id: "decrypt",
        name: "TLS:443",
        msg: "Cipher layer cracking / entropy reduction",
      },
    ],
  },
  {
    lvl: "LVL 3/4",
    nodes: [
      {
        id: "ssh",
        name: "SSH :22",
        msg: "Secure tunnel negotiation / key exchange",
      },
     {
        id: "puzzle",
        name: "DNS:53",
        msg: "Logic gate override / matrix resolution required",
      },
    ],
  },
  {
    lvl: "LVL 5/6",
    nodes: [
         {
        id: "mail",
        name: "MQTT:1883",
        msg: "Raw socket injection / port binding control",
      },
      {
        id: "netcat",
        name: "NETCAT:666",
        msg: "Raw socket injection / port binding control",
      },
     
    ],
  },
];