const mongoose = require("mongoose")

const meetingSchema = new mongoose.Schema({
    subject: String,
    date_time: Date,
    status: String
}, {
    timestamps: true
})

const meetingModel = mongoose.model("meeting", meetingSchema)

module.exports = meetingModel