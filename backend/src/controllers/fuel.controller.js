import * as service from "../services/fuel.service.js";

export const createFuelController = async (req, res, next) => {
    try {
        const fuel = await service.createFuelLog(req.body);

        res.status(201).json({
            success: true,
            data: fuel,
        });
    } catch (error) {
        next(error);
    }
};

export const getFuelLogs = async (req, res, next) => {
    try {
        const fuels = await service.getFuelLogs();

        res.status(200).json({
            success: true,
            data: fuels,
        });
    } catch (error) {
        next(error);
    }
};

export const getFuelLog = async (req, res, next) => {
    try {
        const fuel = await service.getFuelLog(req.params.id);

        res.status(200).json({
            success: true,
            data: fuel,
        });
    } catch (error) {
        next(error);
    }
};

export const updateFuelController = async (req, res, next) => {
    try {
        const fuel = await service.updateFuelLog(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: fuel,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteFuelController = async (req, res, next) => {
    try {
        await service.deleteFuelLog(req.params.id);

        res.status(200).json({
            success: true,
            message: "Fuel Log Deleted Successfully",
        });
    } catch (error) {
        next(error);
    }
};