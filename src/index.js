// require("dotenv").config();
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then(()=>{
    app.on("error",()=> {
        console.log("Error connecting to the database")
        throw error
    })
    
    app.listen(process.env.port || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed",err);
    
})










// one way to connect DB
/*
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",()=> {
            console.log("Error connecting to the database")
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Error: ", error);
        throw err
    }
})()

*/