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
        ...req.body
    })
    newComplain.save()
        .then(doc => res.status(201).send(doc))
        .catch(err => res.status(500).send(err))
})

router.post("/resolve", (req, res, next) => {
    Complain.findById(req.body.id)
        .then(doc => {
            doc.status = !doc.status;
            doc.save()
                .then(newDoc => res.status(200).send(newDoc))
                .catch(err => res.status(500).send(err))
        })
        .catch(err => res.status(500).send(err))
})

router.post("/delete", (req, res, next) => {
    Complain.findByIdAndDelete(req.body.id, function (err, doc) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(doc)
        }
    })
})

module.exports = router