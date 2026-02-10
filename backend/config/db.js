<<<<<<< HEAD
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
=======
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI)
    .then(() => { console.log("DB connected") })
    .catch((err) => { console.error("DB Connection Error:", err) })
}
>>>>>>> 658d9f7 (Initial commit frontend + backend)
