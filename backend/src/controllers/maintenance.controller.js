import * as service from "../services/maintenance.service.js";

export const createMaintenanceController = async (req, res, next) => {
    try {
        const maintenance = await service.createMaintenance(req.body);

        res.status(201).json({
            success: true,
            data: maintenance,
        });
    } catch (error) {
        next(error);
    }
};

export const getMaintenances = async (req, res, next) => {
    try {
        const maintenances = await service.getMaintenances();

        res.status(200).json({
            success: true,
            data: maintenances,
        });
    } catch (error) {
        next(error);
    }
};

export const getMaintenance = async (req, res, next) => {
    try {
        const maintenance = await service.getMaintenance(req.params.id);

        res.status(200).json({
            success: true,
            data: maintenance,
        });
    } catch (error) {
        next(error);
    }
};

export const updateMaintenanceController = async (req, res, next) => {
    try {
        const maintenance = await service.updateMaintenance(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: maintenance,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteMaintenanceController = async (req, res, next) => {
    try {
        await service.deleteMaintenance(req.params.id);

        res.status(200).json({
            success: true,
            message: "Maintenance Deleted Successfully",
        });
    } catch (error) {
        next(error);
    }
};