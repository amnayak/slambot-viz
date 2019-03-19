const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

var getData = require('./data').getData;

const port = process.env.PORT || 3001;
const index = require("./index");

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    5000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
  try {
    socket.emit("FromAPI", getData());
    //console.log("Sent data to clients");
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));
