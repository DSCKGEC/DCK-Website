//right now all the errors are being sent with the response! but later we need to remove that.

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
  eventModel
    .find({})
    .then(eventList => {
      //checks if the length of the events found is 0 or not, if 0 then it is better to send a 404 code to inform that there were no events in the server
      if (eventList.length == 0) {
        res.status(400).json({
          message: "No events found!"
        });
      }
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
  eventModel
    .findById(req.params.id)
    .then(event => {
      res.send(event);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        res.status(404).json({
          message: "ID not found",
          error: err
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error!",
          error: err
        });
      }
    });
});

/* 
PUT request
@ /api/events/:id
passed in: the updated event
returns: the event added to the DB
*/
router.put("/:id", (req, res) => {
  eventModel
    .findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(updates => {
      res.send(updates);
    })
    .catch(err => {
      //this means the error is caused by wrong object id
      if (err.kind === "ObjectId") {
        res.status(404).json({
          message: "ID not found",
          error: err
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error!",
          error: err
        });
      }
    });
});

/* 
POST request
@ /api/events/add
returns: the event added to the DB
*/
router.post("/add", (req, res) => {
  //right now we are directly passing the request body.. But we need to check some things before that and handle the errors accordingly with statuscode 400 and message of the bad data.
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

/* 
DELETE request
@ /api/events/:id
returns: the event deleted
*/
router.delete("/:id", (req, res) => [
  eventModel
    .deleteOne({ _id: req.params.id })
    .then(event => {
      //after successful deletion we send a message of successful deletion and the event
      res.json({
        message: "Event Deletion Successful!",
        event
      });
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        res.status(404).json({
          message: "ID not found",
          error: err
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error!",
          error: err
        });
      }
    })
]);

module.exports = router;
