/**
 * Error handling for the app
 */

 "use strict";

const errorHandler = (err, req, res, next) => {
  req.log.error(err.stack);

  let error = { ...err };
  error.message = err.message;

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Sever Error" });
};
module.exports = errorHandler;
