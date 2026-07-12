import * as service from "../services/vehicle.service.js";

export const createVehicleController = async (req, res, next) => {
    try {
        const vehicle = await service.createVehicle(req.body);

        res.status(201).json({
            success: true,
            data: vehicle,
        });
    } catch (error) {
        next(error);
    }
};

export const getVehicles = async (req, res, next) => {
    try {
        const vehicles = await service.getVehicles();

        res.status(200).json({
            success: true,
            data: vehicles,
        });
    } catch (error) {
        next(error);
    }
};

export const getVehicle = async (req, res, next) => {
    try {
        const vehicle = await service.getVehicle(req.params.id);

        res.status(200).json({
            success: true,
            data: vehicle,
        });
    } catch (error) {
        next(error);
    }
};

export const updateVehicleController = async (req, res, next) => {
    try {
        const vehicle = await service.updateVehicle(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: vehicle,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteVehicleController = async (req, res, next) => {
    try {
        await service.deleteVehicle(req.params.id);

        res.status(200).json({
            success: true,
            message: "Vehicle Deleted Successfully",
        });
    } catch (error) {
        next(error);
    }
};