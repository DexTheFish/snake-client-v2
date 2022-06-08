const net = require("net");
const PORT = 50541;

// connect to server:
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: PORT
  });
  // interpret data as text:
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting...");
connect();