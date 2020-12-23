const mongoose = require("mongoose")

const meeting_schema = new mongoose.Schema({
    subject: String,
    date_time: Date,
    status: String
}, {
    timestamps: true
})

const meeting_model = mongoose.model("meeting", meeting_schema)

module.exports = meeting_model