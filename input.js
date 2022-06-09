// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'e') {
    connection.write('Say:  wazzzaaaap ');
  }
  if (key === 'q') {
    connection.write('Say:   omnomnom');
  }
  if (key === 'x') {
    connection.write('Say:   2 slo 4 me');
  }
  if (key === 'c') {
    connection.write("Say:   Y'all are the best!!!! ");
  }
};

module.exports = { setupInput };