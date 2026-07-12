import { body } from "express-validator";

export const driverValidation = [
    body("firstName")
        .notEmpty()
        .withMessage("First name is required"),

    body("lastName")
        .notEmpty()
        .withMessage("Last name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("phone")
        .notEmpty()
        .withMessage("Phone number is required"),

    body("licenseNumber")
        .notEmpty()
        .withMessage("License number is required"),

    body("licenseExpiry")
        .isISO8601()
        .withMessage("Valid expiry date is required"),
];