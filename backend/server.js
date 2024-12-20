const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Welcome to Andrew's Dyntrace API Monitoring Sandbox!");
});

//Simulate API latency
app.get("/api/latency", (req, res) => {
  setTimeout(() => {
    res.json({message: "Response delayed to simulate latency" });
  }, 2000); //2-second delay
});

//Normal API endpoint
app.get("/api/data", (req, res) => {
  res.json({ data: "Here's some API data!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})