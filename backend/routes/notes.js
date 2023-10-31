const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Endpoint 1: fetch all notes of a user using GET "/api/notes/fetchallnotes" : Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    // console.log(req.user);
    // console.log(req.user.id);
    let allNotes = await Notes.find({ userId: req.user.id });
    // console.log("fetch notes", req.user.id);
    if (!allNotes) {
      return res.status(400).json({ msg: "No note found for this UserId." });
    } else {
      return res.status(200).json(allNotes);
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  // const notes = Notes(req.body);

  // notes.save();

  // res.json({
  //     message: "Successfully added the note"
  // });
  // console.log(req.body);
  // console.log("Successfully added the user");
});

// Endpoint 2: Add a note using POST "/api/notes/addnote" : Login Required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Name must be at least 3 chars long").isLength({ min: 3 }),
    body("description", "Description must be at least 5 chars lo").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    // console.log("add notes", req.user);
    // Validate incoming input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // const [title, description, tag] = req.body
    const newNote = new Notes({
      title: req.body.title,
      description: req.body.description,
      tag: req.body.tag,
      user: req.user,
    });
    newNote
      .save()
      .then(() =>
        res.status(200).json({ message: "New Note has been created" })
      )
      .catch((error) => console.log("Error in saving", error));

    // OR
    // const notes = Notes(req.body);
    // notes.save();
    //     res.json({
    //         message: "Successfully added the note"
    //     });
    // console.log(req.body);
    // console.log("Successfully added the user");
  }
);

// Endpoint 3: update a note using PUT "/api/notes/updatenote/:id" : Login Required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    
    newNote = {};
    
    if (title) {
        newNote.title = title;
    }
    if (description) {
        newNote.description = description;
    }
    if (tag) {
        newNote.tag = tag;
    }
    try {
    // find the note to be updated in db
    let note = await Notes.findById(req.params.id);
    // console.log(req.user._id)
    // console.log(note.user)

  // if note not found in db
  if (!note) {
    return res.status(404).send("The note with given ID was not found");
  }
  
  if (req.user._id != note.user) {
    res.status(401).send("Unauthorized Access! You can only edit your own notes");
  }

  // updating the note
  note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
  res.send({note});
//   or
//   await Notes.updateOne({ _id: req.params.id }, { $set: newNote });
//   res.send(`Updated note ${req.params.id}`);

} catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }


//   or
  //   try {
  //     let updatedNotes = await Notes.findByIdAndUpdate(
  //       req.params.id,
  //       { title, description, tag },
  //       { new: true }
  //     );

  //     if (!updatedNotes) {
  //       throw Error("No note found");
  //     }
  //     res.send(updatedNotes);
  //   } catch (err) {
  //     res.status(400).send(err.toString());
  //   }
});



// Endpoint 4: delete a note using DELETE "/api/notes/deletenote/:id" : Login Required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {

    try {
    let note = await Notes.findById(req.params.id);

    if (!note) {
        return res.status(404).send("The note with given ID was not found");
    }

    if (req.user._id !== note.user){
            res.status(403).send('You are unauthorised');
    }

    const deletedNote = await Notes.findByIdAndDelete(req.params.id);

    if(!deletedNote){
        return res.status(404).send('Cannot find this Note')
    }

    res.send({message:"Deletion Successful!"})
            
} catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
            

// or
    // const deletedNote = await Notes.findByIdAndDelete(req.params.id);
    // if (!deletedNote) {
    //     return res.status(404).send('The note with the given ID was not found');
    // }

    // if (req.user._id !== deletedNote.user){
    //     return res.status(403).send('You are unauthorised to perform this action')
    // }

    // res.send(`Deleted Note with id:${req.params.id}`)
            
})



module.exports = router;
