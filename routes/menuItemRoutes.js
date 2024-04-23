const express = require("express")
const router = express.Router()
const MenuItem = require("./../models/MenuItem")

// menu item 
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
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
// router.get("/:tasteType", async (req, res) => {
//     try {

//         const tasteType = req.params.tasteType;
//         if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sure") {
//             const response = await MenuItem.find({ tasteType: tasteType })
//             console.log("Response fetched ")
//             res.status(200).json(response)
//         } else {
//             res.status(404).json("Invalide taste type")
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ error: "Internal server error" })
//     }
// })

module.exports = router