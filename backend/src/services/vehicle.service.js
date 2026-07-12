import * as repository from "../repositories/vehicle.repository.js";

export const createVehicle = (data) => {
    return repository.createVehicle(data);
};

export const getVehicles = () => {
    return repository.getVehicles();
};

export const getVehicle = (id) => {
    return repository.getVehicle(id);
};

export const updateVehicle = (id, data) => {
    return repository.updateVehicle(id, data);
};

export const deleteVehicle = (id) => {
    return repository.deleteVehicle(id);
};