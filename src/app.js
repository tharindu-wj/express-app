/**
 * Express app
 */

"use strict";

const express = require("express");
const helmet = require("helmet"); // use to secure app by setting HTTP headers

const log = require("./utils/logger");
const errorHandler = require("./middlewares/error");

const userRoutes = require("./routes/user");

const app = express();

// add app logger to request object. so it can be used in other middleware
app.use((req, res, next) => {
  req.log = log;
  next();
});
app.use(helmet());
app.use(express.json());

// Initiate routes
app.use("/", userRoutes);

// handle errors
app.use(errorHandler);

module.exports = app;
