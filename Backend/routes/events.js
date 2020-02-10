const express = require("express");
const router = express.Router();

//importing our model
const eventModel = require("../models/Events");

/* 
GET request
@ /api/events/all
returns: all the events
*/
router.get("/all", (req, res) => {
  //TODO: properly implement the tasks of this route
  eventModel
    .find({})
    .then(eventList => {
      res.json(eventList);
    })
    .catch(err => {
      res.status(500).json({
        msg: "Internal Server Error!",
        error: err
      });
    });
});

/* 
GET request
@ /api/events/:id
returns: the event with the passed in ID
*/
router.get("/:id", (req, res) => {
  //TODO: properly implement the tasks of this route
  //right now it sends a dummy response
  res.send({
    id: req.params.id
  });
});

/* 
PUT request
@ /api/events/:id
passed in: the updated event
returns: the event added to the DB
*/
router.put("/:id", (req, res) => {
  //TODO: properly implement the tasks of this route
  //right now it sends a dummy response
  eventModel
    .findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(updates => {
      res.send(updates);
    })
    .catch(err => {
      res.status(500).json({
        message: "Something went wrong",
        error: err
      });
    });
});

/* 
POST request
@ /api/events/add
returns: the event added to the DB
*/
router.post("/add", (req, res) => {
  //TODO: properly implement the tasks of this route
  //right now it sends a dummy response
  eventModel
    .create(req.body)
    .then(created_event => {
      res.status(201).json(created_event);
    })
    .catch(err => {
      res.status(500).json({
        message: "Internal Server Error",
        error: err
      });
    });
});

module.exports = router;
