import { body } from "express-validator";

export const expenseValidation = [
    body("vehicleId")
        .isInt()
        .withMessage("Vehicle ID is required"),

    body("category")
        .notEmpty()
        .withMessage("Category is required"),

    body("amount")
        .isFloat()
        .withMessage("Amount must be numeric"),

    body("expenseDate")
        .isISO8601()
        .withMessage("Valid expense date required"),
];