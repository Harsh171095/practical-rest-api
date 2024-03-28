const { check } = require("express-validator");

// Validation
const validateUser = [
  check("fullName").notEmpty().withMessage("'fullName' is required"),
  check("emailAddress").isEmail().withMessage("Invalid email").normalizeEmail(),
  check("age").isInt({ min: 18 }).withMessage("Age must be at least 18"),
];

module.exports = validateUser;
