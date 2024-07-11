const express = require('express')
const router = express.Router();
const User = require("../Models/User");

const { login, signup } = require("../Controller/Auth");
const { auth, isAdmin } = require("../middleware/auth")

router.post("/signup", signup);
router.post("/login", login);

// Testing Route for Middleware
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: "Test successful"
    })
})

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Admin"
    })
});

module.exports = router;