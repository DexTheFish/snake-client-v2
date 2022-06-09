const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
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