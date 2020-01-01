const express = require('express')
const router = express.Router()

/* 
GET request
@ /api/events/all
returns: all the events
*/
router.get('/all', (req, res) => {
    //TODO: properly implement the tasks of this route
    //right now it sends a dummy response
    res.send({
        msg: "All events here!"
    })
})

/* 
GET request
@ /api/events/:id
returns: the event with the passed in ID
*/
router.get('/:id', (req, res) => {
    //TODO: properly implement the tasks of this route
    //right now it sends a dummy response
    res.send({
        id: req.params.id
    })
})

/* 
PUT request
@ /api/events/:id
passed in: the updated event
returns: the event added to the DB
*/
router.put('/:id', (req, res) => {
    //TODO: properly implement the tasks of this route
    //right now it sends a dummy response
    res.send({
        id: req.params.id,
        updates: req.body
    })
})

/* 
POST request
@ /api/events/add
returns: the event added to the DB
*/
router.post('/add', (req, res) => {
    //TODO: properly implement the tasks of this route
    //right now it sends a dummy response
    res.send({
        req: req.body
    })
})

module.exports = router