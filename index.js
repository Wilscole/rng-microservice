// Add Express
const express = require("express");
var cors = require('cors')

// Initialize Express
const app = express();

var corsOptions = {
    origin: 'http://localhost:8000/view-api',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

}

// Create GET request
app.get("/", cors(corsOptions), (req, res) => {
    let rng = Math.floor(Math.random() * 101);
    res.json(rng);
});

// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});

module.exports = app;
