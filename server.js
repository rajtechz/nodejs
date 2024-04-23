const express = require('express')
const app = express()
require('dotenv').config()
const db = require("./db")
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World kaise ho')

})

const personRoutes = require("./routes/personRoutes")
const menuItemRoutes = require("./routes/menuItemRoutes")
app.use("/person", personRoutes)
app.use("/menu", menuItemRoutes)
app.listen(PORT, () => {
  console.log("server is running on port number ", PORT)
})