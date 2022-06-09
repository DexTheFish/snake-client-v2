const { connect } = require("./client");
const { setupInput } = require("./input");
const trollConnection = require("./trollClient").connect;


console.log("Connecting...");

trollConnection();
setupInput(connect());