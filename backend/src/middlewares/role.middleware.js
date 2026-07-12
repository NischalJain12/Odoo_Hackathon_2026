import ApiError from "../utils/ApiError.js";

const roleMiddleware = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(new ApiError(401, "Unauthorized"));
        }

        if (!roles.includes(req.user.role)) {
            return next(
                new ApiError(
                    403,
                    "You do not have permission to perform this action"
                )
            );
        }

        next();
    };
};

export default roleMiddleware;