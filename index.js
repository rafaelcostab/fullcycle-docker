const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.
    connect("mongodb://mongo/:27017/test", {})
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
    res.send("Hellow Word!!!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});