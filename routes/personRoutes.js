const express = require("express")
const router = express.Router()
const Person = require("./../models/Person")
router.post("/", async (req, res) => {
    try {
        const data = req.body
        const newPeraon = new Person(data)
        const response = await newPeraon.save()
        console.log("data save")
        res.status(200).json(response)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })

    }
})

router.get("/", async (req, res) => {
    try {

        const data = await Person.find()
        console.log("data feched")
        res.status(200).json(data)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })

    }
})
router.get("/:workType", async (req, res) => {
    try {

        const workType = req.params.workType;
        if (workType == "chef" || workType == "manager" || workType == "waiter") {
            const response = await Person.find({ work: workType })
            console.log("Response fetched ")
            res.status(200).json(response)
        } else {
            res.status(404).json("Invalide work type")
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    }
})

module.exports = router