const express = require("express");
const path = require("path");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/api/", (req, res) => {
  res.send("<h1>Welcome come to the backend API!</h1>");
});

app.get("/api/posts", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// to use the frontend build files
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});