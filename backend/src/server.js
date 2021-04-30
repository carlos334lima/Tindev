const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const server = express();
server.use(express.json());

mongoose.connect(
  "mongodb+srv://omnistack08:omnistack08@omnistack08.p3vai.mongodb.net/omnistack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);


server.use(routes);

server.listen(3333);
