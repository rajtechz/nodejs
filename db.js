const mongoose = require("mongoose")
const mongodbURL = 'mongodb://localhost:27017/hotels';
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