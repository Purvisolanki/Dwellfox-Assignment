const express = require('express');
const app = express();
const cors = require('cors'); // Import cors module
const cookieParser = require('cookie-parser');
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// Use CORS middleware
app.use(cors());

require("./config/database").connect();

// Route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

// Activate
app.listen(PORT, () => {
    console.log("Server running at", PORT);
});

app.get("/", (req, res) => {
    res.send("<h1>Auth App</h1>");
});
