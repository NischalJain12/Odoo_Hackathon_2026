import { body } from "express-validator";

export const maintenanceValidation = [
    body("vehicleId")
        .isInt()
        .withMessage("Vehicle ID is required"),

    body("serviceType")
        .notEmpty()
        .withMessage("Service type is required"),

    body("serviceDate")
        .isISO8601()
        .withMessage("Valid service date required"),

    body("cost")
        .isFloat()
        .withMessage("Cost must be numeric"),
];