// this is the file which connects to the database and returns the database
const mongoose = require("mongoose");

//using dotenv for environment variables
require("dotenv").config();

//connet to mongodb
const db = mongoose.connect(
  process.env.MONGODB_URI,
  {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (!err) console.log("Connected to DB");
    else console.log(err);
  }
);

module.exports = db;
