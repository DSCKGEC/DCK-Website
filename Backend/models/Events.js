const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  //id is by default given to the objects
  //name of the event
  event_name: {
    type: String,
    required: true,
    unique: true
  },
  event_date: {
    type: Date,
    require: true,
    default: Date.now(),
    unique: true
  },
  event_coordinators: {
    type: Array,
    default: []
  },
  //event duration in hours
  event_duration: {
    type: Number,
    default: 1
  },
  //the url of the pictures regarding the event, the first puicture might be used for thumbnail and stuff
  event_pictures: {
    type: Array,
    default: []
  },
  //the details of the event
  event_details: {
    type: String,
    default: "This is yet another event from DC KGEC"
  },
  //number of people participating in the event
  event_participation_count: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("events", eventSchema);
