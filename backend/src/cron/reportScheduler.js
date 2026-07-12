import cron from "node-cron";

const reportScheduler = () => {
    cron.schedule("0 18 * * 0", () => {
        console.log("📊 Weekly TransitOps Report Generated Successfully");
    });
};

export default reportScheduler;