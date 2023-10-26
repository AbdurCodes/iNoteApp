const mongoose = require('mongoose');

// 1st define the schema
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

  });


  // convert schema into model using mongoose.model
  module.exports = mongoose.model("user", UserSchema);