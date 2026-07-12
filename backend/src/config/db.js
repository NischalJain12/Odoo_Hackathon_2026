import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("✅ PostgreSQL Connected Successfully");
    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error);
        process.exit(1);
    }
};

export { prisma };

export default connectDB;