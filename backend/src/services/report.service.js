import * as repository from "../repositories/report.repository.js";

export const vehicleReport = () => {
    return repository.vehicleReport();
};

export const driverReport = () => {
    return repository.driverReport();
};

export const tripReport = () => {
    return repository.tripReport();
};

export const expenseReport = () => {
    return repository.expenseReport();
};

export const fuelReport = () => {
    return repository.fuelReport();
};

export const maintenanceReport = () => {
    return repository.maintenanceReport();
};