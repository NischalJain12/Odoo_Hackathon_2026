import { body } from "express-validator";

export const vehicleValidation = [
    body("vehicleNumber")
        .notEmpty()
        .withMessage("Vehicle number is required"),

    body("vehicleType")
        .notEmpty()
        .withMessage("Vehicle type is required"),

    body("manufacturer")
        .notEmpty()
        .withMessage("Manufacturer is required"),

    body("model")
        .notEmpty()
        .withMessage("Model is required"),

    body("year")
        .isInt()
        .withMessage("Year must be an integer"),

    body("capacity")
        .isFloat()
        .withMessage("Capacity must be numeric"),

    body("fuelType")
        .notEmpty()
        .withMessage("Fuel type is required"),
];