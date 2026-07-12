import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        project: "TransitOps",
        version: "v1",
        message: "API Working Successfully",
    });
});

export default router;