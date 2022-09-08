/**
 * Controller methods for User entity
 */

"use strict";

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

exports.register = asyncHandler(async (req, res, next) => {
  const body = req.body;

  const user = {
    firstName: body["First Name"],
    lastName: body["Last Name"],
    email: body["Email Address"],
    dob: body["Date of Birth"],
  };

  // this is only for show how to handle errors. we can move validations to mongoose Model later
  if (!user.firstName || !user.lastName || !user.email || !user.dob) {
    return next(new ErrorResponse("Required data not found", 400));
  }

  res.status(200).json({ success: true, data: user });
});
