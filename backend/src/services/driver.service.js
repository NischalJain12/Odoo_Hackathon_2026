import * as repository from "../repositories/driver.repository.js";

export const createDriver = (data) => {
    return repository.createDriver(data);
};

export const getDrivers = () => {
    return repository.getDrivers();
};

export const getDriver = (id) => {
    return repository.getDriver(id);
};

export const updateDriver = (id, data) => {
    return repository.updateDriver(id, data);
};

export const deleteDriver = (id) => {
    return repository.deleteDriver(id);
};