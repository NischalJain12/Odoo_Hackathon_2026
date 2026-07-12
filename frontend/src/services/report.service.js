import api from "./api";

export const getVehicleReport = () =>
    api.get("/reports/vehicles");

export const getDriverReport = () =>
    api.get("/reports/drivers");

export const getTripReport = () =>
    api.get("/reports/trips");

export const getFuelReport = () =>
    api.get("/reports/fuel");

export const getExpenseReport = () =>
    api.get("/reports/expenses");

export const getMaintenanceReport = () =>
    api.get("/reports/maintenance");