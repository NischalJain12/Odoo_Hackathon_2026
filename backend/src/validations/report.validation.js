import { query } from "express-validator";

export const reportValidation = [
    query("from")
        .optional()
        .isISO8601()
        .withMessage("Invalid from date"),

    query("to")
        .optional()
        .isISO8601()
        .withMessage("Invalid to date"),
];