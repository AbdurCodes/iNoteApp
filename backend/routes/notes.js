const express = require("express");
const Notes = require("../models/Notes");
const router = express.Router();

router.post("/", (req, res) => {
    const notes = Notes(req.body);
    notes.save();
    res.json({
        message: "Successfully added the note"
    });
    // console.log(req.body);
    // console.log("Successfully added the user");
})

module.exports = router;