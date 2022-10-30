// Add Express
const express = require("express");
var cors = require('cors')

// Initialize Express
const app = express();

app.use(cors())



// Create GET request
app.get("/", (req, res) => {
    let rng = Math.floor(Math.random() * 101);
    res.json(rng);
});

// Initialize server
app.listen(5000, () => {
    console.log("Running on port 5000.");
});

module.exports = app;
