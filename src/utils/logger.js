/**
 * Create common logger for app
 */

"use strict";

const bunyan = require("bunyan"); // use to maintain consistency of the logs in the app
const configs = require("../config/configs");

module.exports = bunyan.createLogger({
  name: "express-assessment",
  level: configs.logLevel,
});
