import { body } from "express-validator";

export const fuelValidation = [
    body("vehicleId")
        .isInt()
        .withMessage("Vehicle ID is required"),

    body("liters")
        .isFloat()
        .withMessage("Liters must be numeric"),

    body("amount")
        .isFloat()
        .withMessage("Amount must be numeric"),

    body("date")
        .isISO8601()
        .withMessage("Valid date required"),
];