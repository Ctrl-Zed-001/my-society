const mongoose = require('mongoose')

const complainSchema = new mongoose.Schema({
    title: String,
    detail: String,
    username: String,
    flat: String,
    status: String
}, {
    timestamps: true
})

const complainModel = mongoose.model("complain", complainSchema)

module.exports = complainModel