const { CONNREFUSED } = require("dns");
const net = require("net");
const PORT = 50541;
const banter = ['DEX','DEX','DEX','DEX','DEX','DEX','DEX','DEX',
 'THE','THE','THE','THE','THE','THE','THE','THE',
  'FISH','FISH','FISH','FISH','FISH','FISH','FISH','FISH',
'plz dont hit me','plz dont hit me','plz dont hit me','plz dont hit me','plz dont hit me','plz dont hit me','plz dont hit me','plz dont hit me',];
const directions = ['up', 'up', 'right', 'right', 'down', 'down', 'left', 'left'];
const trolling = true;


// connect to server:
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: PORT
  });
  // interpret data as text:
  conn.setEncoding("utf8");
  // event handlers:
  conn.on("connect", () => {
    console.log('Connected!');
  });
  conn.on("data", (data) => {
    console.log(data);
    connect(); // <- TROLLING
  });
  /////TROLLING////////
  for (let i = 0; i < 50000; i++) {
    setTimeout(() => {
      conn.write(`Say: ${banter[i % 32]}`);
      conn.write(`Move: ${directions[i % 8]}`);
    }, i * 100);
  }
  ////// DONE TROLLING/////////
  return conn;
};

console.log("Connecting...");
connect();