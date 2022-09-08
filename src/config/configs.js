/**
 * Configurations for the app
 */

"use strict";

const dotenv = require("dotenv"); // use to load all environment variables from .env file
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  logLevel: process.env.LOG_LEVEL || "info",
};
