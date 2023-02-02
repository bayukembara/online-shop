const express = require("express");
const connection = require("./config/database");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port || process.env.PORT, () => {
    console.log(`This server running on port ${port}`);
    connection;
});
