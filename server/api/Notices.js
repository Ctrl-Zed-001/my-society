const express = require("express")
const router = express.Router()
const Notice = require("../models/Notice.model")

router.get("/all", (req, res, next) => {
    Notice.find()
        .then(docs => res.status(200).send(docs))
        .catch(err => res.status(500).send(err))
})

router.post("/add", (req, res, next) => {
    const newNotice = new Notice({
        ...req.body
    })

    newNotice.save()
        .then(doc => res.status(201).send(doc))
        .catch(err => res.status(500).send(err))
})

router.post("/delete", (req, res, next) => {
    Notice.findByIdAndDelete(req.body.id, (err, doc) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(doc)
        }
    })
})

module.exports = router