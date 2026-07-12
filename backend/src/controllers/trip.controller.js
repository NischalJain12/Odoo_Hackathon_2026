import * as service from "../services/trip.service.js";

export const createTripController = async (req, res, next) => {
    try {
        const trip = await service.createTrip(req.body);

        res.status(201).json({
            success: true,
            data: trip,
        });
    } catch (error) {
        next(error);
    }
};

export const getTrips = async (req, res, next) => {
    try {
        const trips = await service.getTrips();

        res.status(200).json({
            success: true,
            data: trips,
        });
    } catch (error) {
        next(error);
    }
};

export const getTrip = async (req, res, next) => {
    try {
        const trip = await service.getTrip(req.params.id);

        res.status(200).json({
            success: true,
            data: trip,
        });
    } catch (error) {
        next(error);
    }
};

export const updateTripController = async (req, res, next) => {
    try {
        const trip = await service.updateTrip(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: trip,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteTripController = async (req, res, next) => {
    try {
        await service.deleteTrip(req.params.id);

        res.status(200).json({
            success: true,
            message: "Trip Deleted Successfully",
        });
    } catch (error) {
        next(error);
    }
};