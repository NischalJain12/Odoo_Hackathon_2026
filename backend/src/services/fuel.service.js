import * as repository from "../repositories/fuel.repository.js";

export const createFuelLog = (data) => {
    return repository.createFuelLog(data);
};

export const getFuelLogs = () => {
    return repository.getFuelLogs();
};

export const getFuelLog = (id) => {
    return repository.getFuelLog(id);
};

export const updateFuelLog = (id, data) => {
    return repository.updateFuelLog(id, data);
};

export const deleteFuelLog = (id) => {
    return repository.deleteFuelLog(id);
};