/**
 * Run express server
 */

"use strict";

const configs = require("./config/configs");
const app = require("./app");
const log = require("./utils/logger");

const PORT = configs.port || 5000;
app.listen(PORT, log.info(`Server running on port ${PORT}`));
