const mongoose = require("mongoose")
require('dotenv').config()
// const mongodbURL = 'mongodb://localhost:27017/hotels';
const mongodbURL = 'mongodb+srv://hiitechz07:hiitechz07@cluster0.remjrlv.mongodb.net/';
const mongoURL = process.env.MONGODB_URL
console.log("dfbdf",mongoURL)
mongoose.connect(mongodbURL)
const db = mongoose.connection;
db.on("connected",()=>{
    console.log("Database is connected to the server...")
})
db.on("error",()=>{
    console.error("Error on connection")
})
db.on("disconnected",()=>{
    console.log("Database is disconnected from the server...")
})

module.exports = db