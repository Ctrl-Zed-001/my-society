const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()

// API ROUTES
const Complains = require("./api/Complains")
const Meetings = require("./api/Meetings")
const Notices = require("./api/Notices")

const port = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        app.listen(port)
    )
    .catch(err => console.log(err))


app.use(cors())
app.use(bodyParser.json())


app.use("/api/complain", Complains)
app.use("/api/meeting", Meetings)
app.use("/api/notice", Notices)

