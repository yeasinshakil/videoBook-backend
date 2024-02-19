import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectToDb = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`DB connection Done!!! BD Host: ${connectionInstance.Connection.name}`);

    } catch (error) {
        console.error('MONGODB Connection Error', error)
        throw error
        process.exit(1)
    }
}