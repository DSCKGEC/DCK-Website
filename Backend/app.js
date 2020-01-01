const express = require("express");
//api router brought in
const api = require("./routes/api");

const app = express();

//port number will either be taken from the process.env 
//or the default fallback is 3000
const PORT = process.env.PORT || 3000;

//the JSON middleware to parse request.body
app.use(express.json())

/* 
ALL request
@ /api
Handles all the request to /api/..
*/
app.use("/api", api);

//app made to listen on PORT 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})