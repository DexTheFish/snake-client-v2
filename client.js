const net = require("net");
const PORT = 50541;

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
    conn.write('Name: DD');
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};
module.exports = { connect };