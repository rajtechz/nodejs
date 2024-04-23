const express = require('express')
const app = express()
const PORT = 3000
const db = require("./db")
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World kaise ho')

})

// menu item 
app.post("/menu", async (req, res) => {
  try {
    const data = req.body
    const newMenuItem = new MenuItem(data)
    const response = await newMenuItem.save()
    console.log("Menu Saved")
    res.status(200).json(response)
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })

  }
});
app.get("/menu", async (req, res) => {
  try {

    const data = await MenuItem.find()
    console.log("data feched")
    res.status(200).json(data)
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal server error" })

  }
})

const personRoutes = require("./routes/personRoutes")
app.use("/person", personRoutes)
app.listen(PORT, () => {
  console.log("server is running on port number ", PORT)
})