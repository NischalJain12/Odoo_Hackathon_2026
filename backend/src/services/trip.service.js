import * as repository from "../repositories/trip.repository.js";

export const createTrip = (data) => {
    return repository.createTrip(data);
};

export const getTrips = () => {
    return repository.getTrips();
};

export const getTrip = (id) => {
    return repository.getTrip(id);
};

export const updateTrip = (id, data) => {
    return repository.updateTrip(id, data);
};

export const deleteTrip = (id) => {
    return repository.deleteTrip(id);
};