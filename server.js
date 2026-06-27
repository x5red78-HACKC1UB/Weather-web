const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.get("/api/weather", (req, res) => {
    res.json({
        success: true,
        city: req.query.city
    });
});

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});

