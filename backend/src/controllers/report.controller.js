import * as service from "../services/report.service.js";

export const vehicleReportController = async (req, res, next) => {
    try {
        const report = await service.vehicleReport();

        res.status(200).json({
            success: true,
            data: report,
        });
    } catch (error) {
        next(error);
    }
};

export const driverReportController = async (req, res, next) => {
    try {
        const report = await service.driverReport();

        res.status(200).json({
            success: true,
            data: report,
        });
    } catch (error) {
        next(error);
    }
};

export const tripReportController = async (req, res, next) => {
    try {
        const report = await service.tripReport();

        res.status(200).json({
            success: true,
            data: report,
        });
    } catch (error) {
        next(error);
    }
};

export const expenseReportController = async (req, res, next) => {
    try {
        const report = await service.expenseReport();

        res.status(200).json({
            success: true,
            data: report,
        });
    } catch (error) {
        next(error);
    }
};

export const fuelReportController = async (req, res, next) => {
    try {
        const report = await service.fuelReport();

        res.status(200).json({
            success: true,
            data: report,
        });
    } catch (error) {
        next(error);
    }
};

export const maintenanceReportController = async (req, res, next) => {
    try {
        const report = await service.maintenanceReport();

        res.status(200).json({
            success: true,
            data: report,
        });
    } catch (error) {
        next(error);
    }
};