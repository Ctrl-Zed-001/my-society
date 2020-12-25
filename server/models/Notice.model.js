const mongoose = require("mongoose")


const noticeSchema = new mongoose.Schema({
    title: String,
    body: String
}, {
    timestamps: true
})

const noticeModel = mongoose.model("notice", noticeSchema)

module.exports = noticeModel