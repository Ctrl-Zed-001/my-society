const express = require("express")
const router = express.Router()
const Complain = require("../models/Complain.model")

router.get("/all", (req, res, next) => {
    Complain.find()
        .then(doc => res.status(200).send(doc))
        .catch(err => res.status(500).send(err))
})

router.post("/new", (req, res, next) => {
    const newComplain = new Complain({
        status: "unresolved",
        ...req.body
    })
    newComplain.save()
        .then(doc => res.status(201).send(doc))
        .catch(err => res.status(500).send(err))
})

module.exports = router