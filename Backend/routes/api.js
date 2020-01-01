const express = require('express')
const router = express.Router()
const events = require('./events')

/* 
ALL request
@ /api/events
returns: all the events related route
*/
router.use("/events", events)

module.exports = router