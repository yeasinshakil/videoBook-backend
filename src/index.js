import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from 'dotenv'
import express from "express"
import { connectToDb } from "./db/index.js";

dotenv.config({ path: './env' })

const app = express()


connectToDb()


/*
    (async () => {
        try {

            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on('Error::::::>>>', (err) => {
                throw err
            })
            app.listen(process.env.PORT, () => {
                console.log('App is listening on Port 8000');
            })

        } catch (error) {
            console.error('MONGODB Connection Error', error)
            throw error
        }
    })()


    */