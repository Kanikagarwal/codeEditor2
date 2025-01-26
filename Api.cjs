const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Serve React app for all routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
