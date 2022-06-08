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
  // event handlers:
  conn.on("connect", () => {
    console.log('Connected!');
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  
  return conn;
};

console.log("Connecting...");
connect();

// event handler example:
if (false) {
  conn.on("event name", () => {
    // code that does something
  });
} 