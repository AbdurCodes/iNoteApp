const express = require("express");
const User = require("../models/User");
const router = express.Router();


// Create user using POST "/api/auth"
router.post("/", (req, res) => {
    const user = User(req.body);
    user.save();
    res.json({
        message: "Successfully added the user"
    });
    // console.log(req.body);
    // console.log("Successfully added the user");
})


// logging in user




// logging out user



module.exports = router;