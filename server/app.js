const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/users", require("./routes/users"));

module.exports = app;
// Start the server
