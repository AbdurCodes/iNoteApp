// entry point express server logic
const connectToMongo = require("./db");
const express = require('express');

connectToMongo();

const app = express();
const port = 5000; // frontEnd port: 3000

// middleware that enables our app communicate in json
app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth")); // contain endpoints for log in, register, and log out users
app.use("/api/notes", require("./routes/notes")); // contain endpoints for CRUD-ing notes


app.listen(port, () => {
  console.log(`Backend Listening on http://localhost:${port}`)
})