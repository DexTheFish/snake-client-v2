const net = require("net");
const PORT = 50541;
const banter = ['DEX','DEX','DEX','DEX','DEX','DEX','DEX','DEX',
 'THE','THE','THE','THE','THE','THE','THE','THE',
  'FISH','FISH','FISH','FISH','FISH','FISH','FISH','FISH',
'hit me I dare ya','hit me I dare ya','hit me I dare ya','hit me I dare ya',
'hit me I dare ya','hit me I dare ya','hit me I dare ya','hit me I dare ya',
'hit me I dare ya','hit me I dare ya','hit me I dare ya','hit me I dare ya',
'hit me I dare ya','hit me I dare ya','hit me I dare ya','hit me I dare ya'];
const directions = ['up', 'right', 'up', 'right', 'right','right', 'down', 'right', 'down', 'down',
'left', 'down', 'left', 'left', 'left', 'up', 'left', 'up'];
const trolling = true;

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
    if (trolling) {
      connect();
    }
  });
  if (trolling) {
    for (let i = 0; i < 50000; i++) {
      setTimeout(() => {
        conn.write(`Say: ${banter[i % banter.length]}`);
        conn.write(`Move: ${directions[i % directions.length]}`);
      }, i * 100);
    }
  }
  return conn;
};
module.exports = { connect };