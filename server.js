const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
console.log("API_KEY =", process.env.API_KEY);
app.use(cors());

app.get("/api/weather", async (req, res) => {
    try {
        const cityName = req.query.city;
        const apiKey = process.env.API_KEY;

        if (!cityName) {
            return res.status(400).json({
                error: "City name is required"
            });
        }

        const apiUrl =
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
        const data = await response.json();
console.log(data);
        res.status(response.status).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err.message
        });
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

