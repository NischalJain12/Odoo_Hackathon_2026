import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`
========================================
🚀 TransitOps Backend Started
🌍 Environment : ${process.env.NODE_ENV}
📡 Server      : http://localhost:${PORT}
========================================
`);
    });
};

startServer();