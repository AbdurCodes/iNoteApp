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


// The createIndexes() method is used to create the indexes that are defined in the schema. Indexes can improve the performance of database queries, so it is important to create them for the fields that you will be querying frequently.

// In most cases, it is better to call the createIndexes() method on the model after it has been created. This is because Mongoose will automatically create the indexes when the model is first compiled, but this can cause a significant load on your production database. By calling the createIndexes() method manually, you can control when the indexes are created and avoid any performance impact on your production database.
const User = mongoose.model("user", UserSchema);
// User.createIndexes(); 
module.exports = User;

// alternatively (prior is preferred)
// convert schema into model using mongoose.model
// module.exports = mongoose.model("user", UserSchema);