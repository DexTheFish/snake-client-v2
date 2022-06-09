const connect = require("./client").connect;
const { setupInput, handleUserInput } = require("./input");

console.log("Connecting...");
connect();