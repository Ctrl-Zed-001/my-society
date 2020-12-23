const express = require('express')
const router = express.Router()
const Meeting = require("../models/Meeting.model")

router.get("/all", (req, res, next) => {
    Meeting.find()
        .then(docs => res.status(200).send(docs))
        .catch(err => res.status(500).send(err))
})

router.post("/new", (req, res, next) => {
    const newMeeting = new Meeting({
        ...req.body
    })

    newMeeting.save()
        .then(doc => res.status(201).send(doc))
        .catch(err => res.status(500).send(err))
})

router.post('/reschedule', (req, res, next) => {
    Meeting.findById(req.body.id)
        .then(doc => {
            doc.date_time = req.body.newtiming
            doc.save()
                .then(newDoc => res.status(200).send(newDoc))
                .catch(err => res.status(500).send(err))
        })
        .catch(err => res.status(500).send(err))
})

router.post("/update", (req, res, next) => {
    Meeting.findById(req.body.id)
        .then(doc => {
            doc.status = req.body.status
            doc.save()
                .then(newdoc => {
                    res.status(200).send(newdoc)
                })
                .catch(err => res.status(500).send(err))
        })
        .catch(err => res.status(500).send(err))
})

module.exports = router