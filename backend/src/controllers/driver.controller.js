import * as service from "../services/driver.service.js";

export const createDriverController = async (req, res, next) => {
    try {
        const driver = await service.createDriver(req.body);

        res.status(201).json({
            success: true,
            data: driver,
        });
    } catch (error) {
        next(error);
    }
};

export const getDrivers = async (req, res, next) => {
    try {
        const drivers = await service.getDrivers();

        res.status(200).json({
            success: true,
            data: drivers,
        });
    } catch (error) {
        next(error);
    }
};

export const getDriver = async (req, res, next) => {
    try {
        const driver = await service.getDriver(req.params.id);

        res.status(200).json({
            success: true,
            data: driver,
        });
    } catch (error) {
        next(error);
    }
};

export const updateDriverController = async (req, res, next) => {
    try {
        const driver = await service.updateDriver(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: driver,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteDriverController = async (req, res, next) => {
    try {
        await service.deleteDriver(req.params.id);

        res.status(200).json({
            success: true,
            message: "Driver Deleted Successfully",
        });
    } catch (error) {
        next(error);
    }
};