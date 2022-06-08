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
module.exports = { connect };