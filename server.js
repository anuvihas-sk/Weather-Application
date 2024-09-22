const express = require("express");
const axios = require("axios");
const app = express();

// Sets EJS as the view engine and serve static files from the "public" folder
app.set("view engine", "ejs");
app.use(express.static("public"));

// Renders the index template with default values
app.get("/", (req, res) => res.render("index", { weather: null, error: null }));

// Handles the /weather route
app.get("/weather", async (req, res) => {
  const { city } = req.query;
  const apiKey = "";
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  
// Checks if any error occurs during the API call
  try {
    const { data } = await axios.get(APIUrl);
    res.render("index", { weather: data, error: null });
  } catch {
    res.render("index", { weather: null, error: "Error, Enter the correct name" });
  }
});

// Starts the server
const port = 3000;
app.listen(port, () => console.log(`App is running on http://localhost:${port}`));

//Run
