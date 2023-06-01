const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/api/", (req, res) => {
  res.send("<h1>Welcome come to the backend API!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});