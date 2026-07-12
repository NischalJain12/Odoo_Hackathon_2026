import { body } from "express-validator";

export const tripValidation = [
    body("source")
        .notEmpty()
        .withMessage("Source is required"),

    body("destination")
        .notEmpty()
        .withMessage("Destination is required"),

    body("departureTime")
        .isISO8601()
        .withMessage("Valid departure time is required"),

    body("driverId")
        .isInt()
        .withMessage("Driver ID must be integer"),

    body("vehicleId")
        .isInt()
        .withMessage("Vehicle ID must be integer"),
];